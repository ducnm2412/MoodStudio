"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CONCEPTS, PACKAGES, STUDIO, photo } from "@/lib/data";

type Errors = Partial<Record<"name" | "phone" | "date" | "custom", string>>;
/** Giá trị đặc biệt: khách tự viết concept theo ý mình. */
const CUSTOM = "tu-chon";
const today = () => new Date().toISOString().slice(0, 10);

/** Điền sẵn concept và gói từ ?concept= và ?pkg= trên URL. */
export function BookingFormFromUrl() {
  const q = useSearchParams();
  const c = q.get("concept"), g = q.get("pkg");
  return (
    <BookingForm
      initialConcept={c && CONCEPTS.some((x) => x.id === c) ? c : ""}
      initialPkg={g && PACKAGES.some((x) => x.id === g) ? g : "mood"}
    />
  );
}

export default function BookingForm({ initialConcept = "", initialPkg = "mood" }: { initialConcept?: string; initialPkg?: string }) {
  const [concept, setConcept] = useState(initialConcept);
  const [pkg, setPkg] = useState(initialPkg);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [summary, setSummary] = useState<{ text: string; saved: boolean } | null>(null);
  const [copied, setCopied] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const phone = v("phone").replace(/[\s.]/g, "");
    const next: Errors = {};
    if (!v("name")) next.name = "Nhập tên giúp mình nha.";
    if (!/^0\d{9}$/.test(phone)) next.phone = "Số điện thoại cần 10 chữ số.";
    if (!v("date") || v("date") < today()) next.date = "Chọn một ngày từ hôm nay trở đi.";
    if (concept === CUSTOM && !v("custom")) next.custom = "Mô tả concept bạn muốn chụp nha.";
    setErrors(next);
    const firstBad = Object.keys(next)[0];
    if (firstBad) {
      document.getElementById(firstBad)?.focus();
      return;
    }

    const c = CONCEPTS.find((x) => x.id === concept);
    const p = PACKAGES.find((x) => x.id === pkg);
    const body = {
      name: v("name"), phone, concept: concept === CUSTOM ? `Tự chọn: ${v("custom")}` : c ? c.name : "Nhờ studio tư vấn", pkg: p ? p.name : "",
      date: v("date"), time: v("time"), people: v("people"), note: v("note"),
    };
    setSending(true);
    let saved = false;
    try {
      const res = await fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      saved = res.ok;
    } catch {
      saved = false;
    }
    setSending(false);

    const d = body.date.split("-").reverse().join("/");
    const text = [
      "Chào MOOD Studio, mình muốn đặt lịch chụp:",
      `• Tên: ${body.name}`,
      `• SĐT/Zalo: ${body.phone}`,
      `• Concept: ${body.concept}`,
      `• Gói: ${body.pkg}`,
      `• Ngày: ${d} — ${body.time}`,
      `• Số người: ${body.people}`,
      body.note ? `• Ghi chú: ${body.note}` : "",
    ].filter(Boolean).join("\n");
    setSummary({ text, saved });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (summary) {
    return (
      <div className="done">
        <h3>{summary.saved ? "Nhận được rồi nha! 🎉" : "Chưa gửi được qua website"}</h3>
        <p>{summary.saved
          ? "MOOD sẽ liên hệ xác nhận trong ngày. Muốn được xếp lịch nhanh hơn, gửi luôn nội dung này qua Zalo hoặc Messenger:"
          : "Kết nối tới studio đang gián đoạn. Gửi nội dung này qua Zalo hoặc Messenger, studio vẫn nhận được lịch của bạn:"}</p>
        <pre>{summary.text}</pre>
        <div style={{ display: "flex", gap: ".7rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn w" type="button" onClick={() => navigator.clipboard?.writeText(summary.text).then(() => setCopied(true))}>{copied ? "Đã sao chép" : "Sao chép"}</button>
          <a className="btn" href={STUDIO.zalo} target="_blank" rel="noopener">Mở Zalo</a>
          <a className="btn lav" href={`${STUDIO.messenger}?text=${encodeURIComponent(summary.text)}`} target="_blank" rel="noopener">Gửi Messenger</a>
        </div>
        <p style={{ marginTop: "1rem", fontSize: ".9rem" }}>
          <a href="#" onClick={(e) => { e.preventDefault(); setSummary(null); setCopied(false); }}>Đặt thêm lịch khác</a>
          {" · "}<Link href="/concept">Xem concept</Link>
        </p>
      </div>
    );
  }

  const bad = (k: keyof Errors) => `field${errors[k] ? " bad" : ""}`;
  const err = (k: keyof Errors) => errors[k] && <div className="err" id={`${k}-err`} role="alert">{errors[k]}</div>;

  return (
    <form className="formbox" onSubmit={submit} noValidate>
      <div className="form-grid">
        <div className="full">
          <label htmlFor="concept">Chọn concept</label>
          <div className="cstrip">
            {CONCEPTS.map((c) => (
              <button key={c.id} type="button" aria-pressed={concept === c.id} onClick={() => setConcept(c.id)}>
                <img src={photo(c.imgs[0])} alt="" /><span>{c.emoji} {c.name}</span>
              </button>
            ))}
            <button type="button" aria-pressed={concept === CUSTOM} onClick={() => setConcept(CUSTOM)}>
              <span className="custom-tile" aria-hidden="true">✍️</span><span>Tự viết concept</span>
            </button>
          </div>
          <div className="field">
            <select id="concept" value={concept} onChange={(e) => setConcept(e.target.value)}>
              <option value="">— Chưa biết, nhờ studio tư vấn —</option>
              {CONCEPTS.map((c) => <option key={c.id} value={c.id}>{c.emoji} {c.name}</option>)}
              <option value={CUSTOM}>✍️ Concept theo ý mình</option>
            </select>
          </div>
          {concept === CUSTOM && (
            <div className={bad("custom")} style={{ marginTop: ".8rem" }}>
              <label htmlFor="custom">Concept bạn muốn chụp</label>
              <textarea id="custom" name="custom" autoFocus aria-invalid={!!errors.custom}
                placeholder="VD: tiệc trà kiểu Pháp, váy hoa nhí, tông hồng be, có nến và bánh macaron. Có ảnh tham khảo thì gửi thêm qua Zalo nha." />
              {err("custom")}
            </div>
          )}
        </div>
        <div className={bad("name")}><label htmlFor="name">Tên của bạn</label><input id="name" name="name" autoComplete="name" placeholder="VD: Minh Anh" aria-invalid={!!errors.name} />{err("name")}</div>
        <div className={bad("phone")}><label htmlFor="phone">Số điện thoại / Zalo</label><input id="phone" name="phone" inputMode="tel" autoComplete="tel" placeholder="09xx xxx xxx" aria-invalid={!!errors.phone} />{err("phone")}</div>
        <div className={bad("date")}><label htmlFor="date">Ngày chụp</label><input id="date" name="date" type="date" aria-invalid={!!errors.date} />{err("date")}</div>
        <div className="field"><label htmlFor="time">Khung giờ</label><select id="time" name="time"><option>Sáng (9:00 – 12:00)</option><option>Chiều (13:00 – 17:00)</option><option>Tối (17:30 – 20:00)</option></select></div>
        <div className="field"><label htmlFor="pkg">Gói chụp</label><select id="pkg" value={pkg} onChange={(e) => setPkg(e.target.value)}>{PACKAGES.map((p) => <option key={p.id} value={p.id}>{p.name} — {p.price}đ</option>)}</select></div>
        <div className="field"><label htmlFor="people">Số người</label><select id="people" name="people"><option>1 người</option><option>2 người</option><option>Nhóm 3–5 người</option></select></div>
        <div className="field full"><label htmlFor="note">Ghi chú</label><textarea id="note" name="note" placeholder="VD: sinh nhật tuổi 22, thích tông hồng, muốn có bóng bay..." /></div>
        <div className="full"><button className="btn" type="submit" disabled={sending}>{sending ? "Đang gửi…" : "Gửi yêu cầu ✨"}</button></div>
      </div>
    </form>
  );
}
