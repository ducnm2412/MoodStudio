import Link from "next/link";
import { STUDIO } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <Link className="brand" href="/"><i>♡</i>MOOD studio</Link>
            <p style={{ marginTop: ".6rem" }}>Studio chụp ảnh concept cá nhân, nghệ thuật, cổ trang và chân dung tại TP.HCM. Hồng pastel, trắng kem, be — và mood của riêng bạn.</p>
          </div>
          <div>
            <ul>
              <li><Link href="/gioi-thieu">Về MOOD</Link></li>
              <li><Link href="/concept">Concept</Link></li>
              <li><Link href="/bang-gia">Bảng giá</Link></li>
              <li><Link href="/bo-suu-tap">Gallery</Link></li>
              <li><Link href="/dat-lich">Đặt lịch</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a href={`tel:${STUDIO.phone}`}>{STUDIO.phoneDisplay}</a></li>
              <li><a href={STUDIO.zalo} target="_blank" rel="noopener">Zalo</a></li>
              <li><a href={STUDIO.facebook} target="_blank" rel="noopener">Facebook</a></li>
              <li><a href={STUDIO.maps} target="_blank" rel="noopener">Google Maps</a></li>
              <li><Link href="/quan-ly" className="soft" style={{ fontWeight: 500 }}>Quản lý đặt lịch</Link></li>
            </ul>
          </div>
        </div>
        <p className="copy">© 2026 MOOD Studio · made with ♡</p>
      </div>
    </footer>
  );
}
