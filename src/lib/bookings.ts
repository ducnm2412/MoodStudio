import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Booking } from "./data";

// Lưu yêu cầu đặt lịch vào file JSON trên máy chủ.
// Hosting không có ổ đĩa ghi được (Vercel, Netlify...) cần thay bằng Google Sheets hoặc một cơ sở dữ liệu.
const FILE = path.join(process.cwd(), "data", "bookings.json");

export async function readBookings(): Promise<Booking[]> {
  try {
    return JSON.parse(await readFile(FILE, "utf8"));
  } catch {
    return [];
  }
}

export async function writeBookings(list: Booking[]) {
  await mkdir(path.dirname(FILE), { recursive: true });
  await writeFile(FILE, JSON.stringify(list, null, 2), "utf8");
}
