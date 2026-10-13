import type { Metadata } from "next";
import Link from "next/link";
import { PackageCard } from "@/components/Cards";
import { PACKAGES } from "@/lib/data";

export const metadata: Metadata = { title: "Bảng giá" };

export default function Pricing() {
  return (
    <section><div className="wrap">
      <div className="sec-head"><div>
        <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)" }}>Bảng giá</h1>
        <p>Mọi gói đều đã gồm trang phục, phụ kiện, makeup, làm tóc và ảnh retouch. Không phát sinh phí đồ.</p>
      </div></div>
      <div className="pgrid">{PACKAGES.map((p) => <PackageCard key={p.id} p={p} />)}</div>
      <p className="note">Giá tham khảo, có thể thay đổi theo mùa và concept đặc biệt. Thêm concept: +150.000đ. Thêm ảnh retouch: 50.000đ/ảnh. Lấy toàn bộ file gốc: +200.000đ. Nhắn Zalo để được báo giá đúng cho ý tưởng của bạn.</p>
      <Link className="btn" href="/dat-lich" style={{ marginTop: ".5rem" }}>Đặt lịch với gói đã chọn</Link>
    </div></section>
  );
}
