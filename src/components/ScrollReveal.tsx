"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Các section hiện dần (trượt lên + mờ dần) khi cuộn tới.
 * Class chỉ được gắn bằng JS, nên tắt JS thì nội dung vẫn hiện bình thường.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll<HTMLElement>("main section > .wrap, main .marq, main .textmarq")];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    els.forEach((el) => {
      // Phần đang nằm trong màn hình lúc tải trang thì hiện luôn, không chờ.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
