"use client";

import { useCallback, useEffect, useState } from "react";
import { STATUS, type Booking } from "@/lib/data";

const KEY = "mood_admin_pin";

export default function AdminBookings() {
  const [pin, setPin] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [rows, setRows] = useState<Booking[]>([]);
  const [q, setQ] = useState("");
  const [st, setSt] = useState("");

  const load = useCallback(async (p: string) => {
    const res = await fetch("/api/bookings", { headers: { "x-admin-pin": p }, cache: "no-store" });
    if (res.status === 401) {
      sessionStorage.removeItem(KEY);
      setPin(null);
      setError("Mã truy cập không đúng.");
      return;
    }
    if (!res.ok) {
      setError("Không tải được danh sách. Thử tải lại trang.");
      return;
    }
    setError("");
    setPin(p);
    sessionStorage.setItem(KEY, p);
    setRows(await res.json());
  }, []);

  useEffect(() => {
    // Mở lại phiên đã nhập mã trong tab này; load() chỉ cập nhật state sau khi fetch xong.
    const saved = sessionStorage.getItem(KEY);
    if (saved) void Promise.resolve().then(() => load(saved));
  }, [load]);

  async function changeStatus(id: string, status: string) {
    if (!pin) return;
    setRows((r) => r.map((x) => (x.id === id ? { ...x, status } : x)));
    const res = await fetch("/api/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "x-admin-pin": pin },
      body: JSON.stringify({ id, status }),
    });
    if (!res.ok) {
      setError("Chưa lưu được trạng thái. Danh sách đã được tải lại.");
      load(pin);
    }
  }

  function exportCsv() {
    const head = ["Gửi lúc", "Tên", "SĐT", "Concept", "Gói", "Ngày", "Giờ", "Số người", "Ghi chú", "Trạng thái"];
    const lines = [head, ...rows.map((r) => [r.createdAt, r.name, r.phone, r.concept, r.pkg, r.date, r.time, r.people, r.note, STATUS[r.status] ?? r.status])];
    const csv = "﻿" + lines.map((l) => l.map((x) => `"${String(x ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    a.download = `mood-dat-lich-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  }

  if (!pin) {
    return (
      <form className="lock" onSubmit={(e) => { e.preventDefault(); load(input); }}>
        <label htmlFor="pin">Mã truy cập</label>
        <div style={{ display: "flex", gap: ".6rem" }}>
          <input id="pin" type="password" placeholder="Nhập mã" value={input} onChange={(e) => setInput(e.target.value)} autoComplete="current-password" />
          <button className="btn" type="submit">Mở</button>
        </div>
        {error && <p className="note" role="alert" style={{ color: "#D23B5F" }}>{error}</p>}
        <p className="note">Mã demo: <b>mood2026</b>. Đổi mã (biến môi trường ADMIN_PIN) trước khi dùng thật.</p>
      </form>
    );
  }

  const needle = q.toLowerCase();
  const list = rows.filter((r) => (!st || r.status === st) && (!needle || [r.name, r.phone, r.concept, r.pkg, r.note].join(" ").toLowerCase().includes(needle)));

  return (
    <>
      <div className="admin-bar">
        <label className="sr-only" htmlFor="q">Tìm yêu cầu</label>
        <input id="q" placeholder="Tìm tên, SĐT, concept…" value={q} onChange={(e) => setQ(e.target.value)} />
        <label className="sr-only" htmlFor="st">Lọc trạng thái</label>
        <select id="st" value={st} onChange={(e) => setSt(e.target.value)}>
          <option value="">Tất cả trạng thái</option>
          {Object.entries(STATUS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <span className="soft" style={{ fontSize: ".85rem" }}>{list.length} yêu cầu</span>
        <button className="btn w sm" type="button" onClick={() => load(pin)}>Tải lại</button>
        <button className="btn w sm" type="button" onClick={exportCsv} disabled={!rows.length}>Tải CSV</button>
      </div>
      {error && <p className="note" role="alert" style={{ color: "#D23B5F" }}>{error}</p>}
      <div className="tscroll">
        {list.length === 0 ? (
          <p className="empty" style={{ margin: 0 }}>{rows.length ? "Không có yêu cầu nào khớp bộ lọc." : "Chưa có yêu cầu nào. Yêu cầu gửi từ trang Đặt lịch sẽ hiện ở đây."}</p>
        ) : (
          <table>
            <thead>
              <tr><th>Gửi lúc</th><th>Khách</th><th>Liên hệ</th><th>Concept / Gói</th><th>Lịch chụp</th><th>Ghi chú</th><th>Trạng thái</th></tr>
            </thead>
            <tbody>
              {list.map((r) => (
                <tr key={r.id}>
                  <td>{new Date(r.createdAt).toLocaleString("vi-VN", { dateStyle: "short", timeStyle: "short" })}</td>
                  <td><b>{r.name}</b><br /><span className="soft" style={{ fontSize: ".8rem" }}>{r.people}</span></td>
                  <td><a href={`tel:${r.phone}`}>{r.phone}</a><br /><a style={{ fontSize: ".8rem" }} href={`https://zalo.me/${r.phone}`} target="_blank" rel="noopener">Zalo</a></td>
                  <td>{r.concept}<br /><span className="soft" style={{ fontSize: ".8rem" }}>{r.pkg}</span></td>
                  <td>{r.date.split("-").reverse().join("/")}<br /><span className="soft" style={{ fontSize: ".8rem" }}>{r.time}</span></td>
                  <td style={{ maxWidth: 220 }}>{r.note}</td>
                  <td>
                    <span className={`st ${r.status}`}>{STATUS[r.status] ?? r.status}</span><br />
                    <label className="sr-only" htmlFor={`s-${r.id}`}>Đổi trạng thái</label>
                    <select id={`s-${r.id}`} value={r.status} onChange={(e) => changeStatus(r.id, e.target.value)}>
                      {Object.entries(STATUS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
