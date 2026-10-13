import type { Metadata } from "next";
import { Gallery } from "@/components/Interactive";
import { STUDIO } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <section><div className="wrap">
      <div className="sec-head">
        <div><h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)" }}>Gallery</h1><p>Ảnh từ các buổi chụp gần đây ở MOOD. Bấm vào để xem to.</p></div>
        <a className="btn w sm" href={STUDIO.facebook} target="_blank" rel="noopener">Xem thêm trên Facebook</a>
      </div>
      <Gallery />
    </div></section>
  );
}
