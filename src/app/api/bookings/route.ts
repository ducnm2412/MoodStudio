import { randomUUID } from "node:crypto";
import { readBookings, writeBookings } from "@/lib/bookings";
import { STATUS, type Booking } from "@/lib/data";

const ADMIN_PIN = process.env.ADMIN_PIN ?? "mood2026";
const authorized = (req: Request) => req.headers.get("x-admin-pin") === ADMIN_PIN;
const clip = (v: unknown, n = 200) => String(v ?? "").trim().slice(0, n);

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (!b) return Response.json({ error: "Dữ liệu không hợp lệ" }, { status: 400 });
  const phone = clip(b.phone, 20).replace(/[\s.]/g, "");
  if (!clip(b.name) || !/^0\d{9}$/.test(phone) || !/^\d{4}-\d{2}-\d{2}$/.test(clip(b.date))) {
    return Response.json({ error: "Thiếu tên, số điện thoại hoặc ngày chụp" }, { status: 400 });
  }
  const booking: Booking = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new",
    name: clip(b.name, 80),
    phone,
    concept: clip(b.concept, 80),
    pkg: clip(b.pkg, 80),
    date: clip(b.date, 10),
    time: clip(b.time, 40),
    people: clip(b.people, 40),
    note: clip(b.note, 1000),
  };
  const list = await readBookings();
  list.unshift(booking);
  await writeBookings(list);
  return Response.json({ id: booking.id }, { status: 201 });
}

export async function GET(req: Request) {
  if (!authorized(req)) return Response.json({ error: "Sai mã truy cập" }, { status: 401 });
  return Response.json(await readBookings());
}

export async function PATCH(req: Request) {
  if (!authorized(req)) return Response.json({ error: "Sai mã truy cập" }, { status: 401 });
  const { id, status } = (await req.json().catch(() => ({}))) as { id?: string; status?: string };
  if (!id || !status || !(status in STATUS)) return Response.json({ error: "Trạng thái không hợp lệ" }, { status: 400 });
  const list = await readBookings();
  const row = list.find((x) => x.id === id);
  if (!row) return Response.json({ error: "Không tìm thấy yêu cầu" }, { status: 404 });
  row.status = status;
  await writeBookings(list);
  return Response.json(row);
}
