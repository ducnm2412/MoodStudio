"use client";

import { useEffect, useState } from "react";
import { photo } from "@/lib/data";

/** Ảnh bấm để xem lớn (giống data-lb của template). */
export default function LightboxImages({ keys, alt, className, loading }: { keys: string[]; alt: string; className: string; loading?: "lazy" }) {
  const [i, setI] = useState<number | null>(null);

  useEffect(() => {
    if (i === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((x) => (x! + 1) % keys.length);
      if (e.key === "ArrowLeft") setI((x) => (x! - 1 + keys.length) % keys.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [i, keys.length]);

  return (
    <>
      <div className={className}>
        {keys.map((k, n) => (
          <img key={k} src={photo(k)} alt={alt} loading={loading} role="button" tabIndex={0}
            onClick={() => setI(n)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setI(n)} />
        ))}
      </div>
      <div className={`lb${i !== null ? " on" : ""}`} onClick={(e) => e.target === e.currentTarget && setI(null)}>
        {i !== null && <>
          <button onClick={() => setI(null)} aria-label="Đóng" autoFocus>×</button>
          <img src={photo(keys[i])} alt={alt} />
          {keys.length > 1 && <>
            <button className="prev" onClick={() => setI((i - 1 + keys.length) % keys.length)} aria-label="Ảnh trước">‹</button>
            <button className="next" onClick={() => setI((i + 1) % keys.length)} aria-label="Ảnh sau">›</button>
          </>}
        </>}
      </div>
    </>
  );
}
