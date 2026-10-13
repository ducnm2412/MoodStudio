import type { Metadata } from "next";
import AdminBookings from "@/components/AdminBookings";

export const metadata: Metadata = { title: "Quản lý đặt lịch", robots: { index: false, follow: false } };

export default function Admin() {
  return (
    <section><div className="wrap">
      <div className="sec-head"><div>
        <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)" }}>Yêu cầu đặt lịch</h1>
        <p>Trang nội bộ cho studio. Cập nhật trạng thái sau khi đã gọi / xác nhận với khách.</p>
      </div></div>
      <AdminBookings />
    </div></section>
  );
}
