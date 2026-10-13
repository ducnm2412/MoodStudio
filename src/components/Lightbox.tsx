"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { photo } from "@/lib/data";

/** Ảnh bấm để xem lớn; trong lightbox lướt ngang (vuốt / nút / phím mũi tên) để qua ảnh khác. */
export default function LightboxImages({ keys, alt, className, loading }: { keys: string[]; alt: string; className: string; loading?: "lazy" }) {
  const [open, setOpen] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const track = useRef<HTMLDivElement>(null);

  const go = useCallback((n: number, smooth = true) => {
    const el = track.current;
    if (!el) return;
    const i = (n + keys.length) % keys.length;
    el.scrollTo({ left: i * el.clientWidth, behavior: smooth ? "smooth" : "auto" });
  }, [keys.length]);

  // Mở đúng ảnh vừa bấm, khoá cuộn trang phía sau.
  useEffect(() => {
    if (open === null) return;
    go(open, false);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open, go]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(current + 1);
      if (e.key === "ArrowLeft") go(current - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, current, go]);

  const onScroll = () => {
    const el = track.current;
    if (el) setCurrent(Math.round(el.scrollLeft / el.clientWidth));
  };

  const show = (n: number) => { setCurrent(n); setOpen(n); };

  return (
    <>
      <div className={className}>
        {keys.map((k, n) => (
          <img key={k} src={photo(k)} alt={alt} loading={loading} role="button" tabIndex={0}
            onClick={() => show(n)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && show(n)} />
        ))}
      </div>
      {open !== null && (
        <div className="lb on" role="dialog" aria-modal="true" aria-label="Xem ảnh">
          <div className="lb-track" ref={track} onScroll={onScroll} onClick={(e) => (e.target as HTMLElement).tagName !== "IMG" && setOpen(null)}>
            {keys.map((k, n) => (
              <div className="lb-slide" key={k}>
                <img src={photo(k)} alt={`${alt} ${n + 1}`} loading={Math.abs(n - current) > 2 ? "lazy" : undefined} draggable={false} />
              </div>
            ))}
          </div>
          <button className="lb-x" onClick={() => setOpen(null)} aria-label="Đóng" autoFocus>×</button>
          {keys.length > 1 && <>
            <button className="prev" onClick={() => go(current - 1)} aria-label="Ảnh trước">‹</button>
            <button className="next" onClick={() => go(current + 1)} aria-label="Ảnh sau">›</button>
            <span className="lb-count" aria-live="polite">{current + 1} / {keys.length}</span>
          </>}
        </div>
      )}
    </>
  );
}
