"use client";

import { useEffect, useState } from "react";

/**
 * Màn hình chờ lần đầu mở web, hiện ~0,8s rồi mờ dần.
 * CSS có sẵn mốc tự ẩn sau 4s, phòng khi JS lỗi thì loader không che trang mãi.
 */
export default function PageLoader() {
  const [state, setState] = useState<"show" | "leave" | "gone">("show");

  // Ẩn khi trang đã sẵn sàng tương tác (không chờ hết ảnh để máy / mạng chậm không phải đợi lâu).
  useEffect(() => {
    const t = setTimeout(() => setState("leave"), 800);
    return () => clearTimeout(t);
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
