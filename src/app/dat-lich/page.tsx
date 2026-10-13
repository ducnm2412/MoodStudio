import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm, { BookingFormFromUrl } from "@/components/BookingForm";
import { STUDIO } from "@/lib/data";

export const metadata: Metadata = { title: "Đặt lịch chụp" };

export default function Booking() {
  return (
    <section><div className="wrap">
      <div className="sec-head"><div>
        <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)" }}>Đặt lịch chụp 🎀</h1>
        <p>Điền xong, studio gọi lại hoặc nhắn Zalo xác nhận trong ngày. Đổi lịch miễn phí trước 48 giờ.</p>
      </div></div>
      <div className="book-layout">
        <div>
          <Suspense fallback={<BookingForm />}>
            <BookingFormFromUrl />
          </Suspense>
        </div>
        <aside className="aside">
          <h3>Trước khi tới 📝</h3>
          <p>Buổi chụp 1,5–3 giờ tuỳ gói. Tới sớm 15 phút để chọn đồ và makeup.</p>
          <p>Mang theo một món bạn muốn có trong ảnh (hoa, thú bông, chiếc áo yêu thích…) nếu có.</p>
          <p>Ảnh retouch trả trong 5–7 ngày qua Google Drive.</p>
          <h3 style={{ marginTop: "1.2rem" }}>Hỏi nhanh 💬</h3>
          <p>Zalo <a href={STUDIO.zalo}><b>{STUDIO.phoneDisplay}</b></a><br />Facebook <a href={STUDIO.facebook} target="_blank" rel="noopener"><b>MOOD Studio</b></a></p>
        </aside>
      </div>
    </div></section>
  );
}
