import type { Metadata } from "next";
import { Suspense } from "react";
import { ConceptGrid, ConceptGridFromUrl } from "@/components/Interactive";
import { CONCEPTS } from "@/lib/data";

export const metadata: Metadata = { title: "Concept" };

export default function Concepts() {
  return (
    <section><div className="wrap">
      <div className="sec-head"><div>
        <span className="pill p">{CONCEPTS.length} concept</span>
        <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", marginTop: ".5rem" }}>Chọn mood hôm nay</h1>
        <p>Bấm vào để xem bộ ảnh mẫu, trang phục và gói phù hợp.</p>
      </div></div>
      <Suspense fallback={<ConceptGrid />}>
        <ConceptGridFromUrl />
      </Suspense>
    </div></section>
  );
}
