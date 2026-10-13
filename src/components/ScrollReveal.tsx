"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = "main section > .wrap, main .marq, main .textmarq";

/**
 * Các section hiện dần khi cuộn tới.
 * - Class chỉ gắn bằng JS: tắt JS thì nội dung vẫn hiện bình thường.
 * - Trình duyệt cũ không có IntersectionObserver: bỏ qua hiệu ứng, hiện luôn.
 * - Máy bật "giảm chuyển động" vẫn chạy, CSS đổi sang hiệu ứng mờ dần (xem globals.css).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    els.forEach((el) => {
      // Phần đang nằm trong màn hình lúc tải trang thì hiện luôn, không chờ.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      el.classList.add("reveal");
      io.observe(el);
    });
    // Phòng hờ: nếu vì lý do nào đó observer không báo (tab nền, trình duyệt lạ), sau 6s hiện hết.
    const fallback = () => els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
    });
    const safety = setTimeout(() => {
      window.addEventListener("scroll", fallback, { passive: true });
      fallback();
    }, 6000);
    return () => {
      io.disconnect();
      clearTimeout(safety);
      window.removeEventListener("scroll", fallback);
    };
  }, [pathname]);

  return null;
}
