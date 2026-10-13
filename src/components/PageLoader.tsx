"use client";

import { useEffect, useState } from "react";

/**
 * Màn hình chờ lần đầu mở web. Ẩn khi trang tải xong (tối thiểu ~0,8s cho đủ thấy hiệu ứng).
 * CSS có sẵn mốc tự ẩn sau 4s, phòng khi JS lỗi thì loader không che trang mãi.
 */
export default function PageLoader() {
  const [state, setState] = useState<"show" | "leave" | "gone">("show");

  useEffect(() => {
    const start = performance.now();
    let t: ReturnType<typeof setTimeout>;
    const finish = () => {
      t = setTimeout(() => setState("leave"), Math.max(0, 800 - (performance.now() - start)));
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => { clearTimeout(t); window.removeEventListener("load", finish); };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("loading", state === "show");
    if (state === "leave") {
      const t = setTimeout(() => setState("gone"), 600);
      return () => clearTimeout(t);
    }
  }, [state]);

  if (state === "gone") return null;
  return (
    <div className={`loader${state === "leave" ? " leave" : ""}`} role="status" aria-label="Đang tải MOOD Studio">
      <div className="loader-heart" aria-hidden="true">♡</div>
      <div className="loader-name">MOOD studio</div>
      <div className="loader-bar" aria-hidden="true"><span /></div>
      <span className="loader-sparkle s1" aria-hidden="true">✦</span>
      <span className="loader-sparkle s2" aria-hidden="true">✿</span>
      <span className="loader-sparkle s3" aria-hidden="true">✦</span>
    </div>
  );
}
