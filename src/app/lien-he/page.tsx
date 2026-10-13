import type { Metadata } from "next";
import { STUDIO } from "@/lib/data";

export const metadata: Metadata = { title: "Liên hệ" };

export default function Contact() {
  return (
    <section><div className="wrap">
      <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", marginBottom: "1.5rem" }}>Liên hệ 💌</h1>
      <div className="contact">
        <div className="cbox">
          <dl>
            <dt>Zalo / điện thoại</dt><dd><a href={`tel:${STUDIO.phone}`}>{STUDIO.phoneDisplay}</a></dd>
            <dt>Facebook</dt><dd><a href={STUDIO.facebook} target="_blank" rel="noopener">MOOD Studio</a></dd>
            <dt>Địa chỉ</dt><dd>TP. Hồ Chí Minh — xem vị trí chính xác trên Google Maps</dd>
            <dt>Giờ mở cửa</dt><dd>9:00 – 20:00 hằng ngày<br /><span className="soft" style={{ fontWeight: 500, fontSize: ".85rem" }}>Chụp theo lịch hẹn, nhớ đặt trước nha.</span></dd>
          </dl>
          <div style={{ display: "flex", gap: ".7rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <a className="btn" href={STUDIO.zalo} target="_blank" rel="noopener">Nhắn Zalo</a>
            <a className="btn lav" href={STUDIO.messenger} target="_blank" rel="noopener">Nhắn Messenger</a>
          </div>
        </div>
        <div className="mapbox">
          <h3>📍 MOOD Studio trên Google Maps</h3>
          <p>Xem đường đi, ảnh thực tế và review từ khách.</p>
          <a className="btn w" href={STUDIO.maps} target="_blank" rel="noopener" style={{ alignSelf: "flex-start" }}>Mở Google Maps</a>
        </div>
      </div>
    </div></section>
  );
}
