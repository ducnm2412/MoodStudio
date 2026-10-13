"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CATEGORIES, CONCEPTS, photo } from "@/lib/data";
import { ConceptCard } from "./Cards";
import LightboxImages from "./Lightbox";

const ALL = "Tất cả";

function Filters({ value, onChange }: { value: string; onChange: (c: string) => void }) {
  return (
    <div className="filters" role="group" aria-label="Lọc concept">
      {[ALL, ...CATEGORIES].map((c) => (
        <button key={c} type="button" aria-pressed={value === c} onClick={() => onChange(c)}>{c}</button>
      ))}
    </div>
  );
}

export function ConceptGrid({ cat = ALL, onChange }: { cat?: string; onChange?: (c: string) => void }) {
  return (
    <>
      <Filters value={cat} onChange={(c) => onChange?.(c)} />
      <div className="cgrid">{CONCEPTS.filter((c) => cat === ALL || c.cat === cat).map((c) => <ConceptCard key={c.id} c={c} />)}</div>
    </>
  );
}

/** Lọc concept theo ?loai= trên URL. Dùng trong <Suspense fallback={<ConceptGrid />}>. */
export function ConceptGridFromUrl() {
  const q = useSearchParams().get("loai");
  const router = useRouter();
  const pathname = usePathname();
  const cat = q && CATEGORIES.includes(q) ? q : ALL;
  return <ConceptGrid cat={cat} onChange={(c) => router.replace(c === ALL ? pathname : `${pathname}?loai=${encodeURIComponent(c)}`, { scroll: false })} />;
}

export function Gallery() {
  const [cat, setCat] = useState(ALL);
  const keys = [...new Set(CONCEPTS.filter((c) => cat === ALL || c.cat === cat).flatMap((c) => c.imgs))];
  return (
    <>
      <Filters value={cat} onChange={setCat} />
      <LightboxImages key={cat} keys={keys} alt="Ảnh MOOD Studio" className="masonry" loading="lazy" />
    </>
  );
}

const QUIZ = [
  ["sinh-nhat-hong", "🎂 Sắp sinh nhật"],
  ["co-trang-nhung-do", "🏮 Muốn thật rực rỡ"],
  ["gau-bong-pyjama", "🧸 Lười mà vẫn muốn xinh"],
  ["ly-ly-hong", "🌸 Thích hoa, thích màu"],
  ["chan-dung-den", "🖤 Cần ảnh profile xịn"],
  ["ruou-vang-am", "🍷 Hơi điện ảnh một chút"],
  ["vintage-hoa-xanh", "💙 Mộc mạc, vintage"],
  ["huong-duong-chanh", "🍋 Tươi, nhiều nắng"],
];

export function Quiz() {
  const [id, setId] = useState<string | null>(null);
  const c = CONCEPTS.find((x) => x.id === id);
  return (
    <div className="quiz">
      <div>
        <span className="pill p">mini quiz ✨</span>
        <h2 style={{ margin: ".6rem 0 .3rem" }}>Hôm nay mood bạn thế nào?</h2>
        <p className="soft">Chọn một vibe, MOOD gợi ý concept hợp nhất.</p>
        <div className="qopts">
          {QUIZ.map(([cid, label]) => (
            <button key={cid} type="button" aria-pressed={id === cid} onClick={() => setId(cid)}>{label}</button>
          ))}
        </div>
      </div>
      <div className="qresult" aria-live="polite">
        {c ? (
          <>
            <img src={photo(c.imgs[0])} alt="" />
            <div>
              <small className="soft">gợi ý cho bạn</small>
              <h3>{c.emoji} {c.name}</h3>
              <p className="soft" style={{ margin: "0 0 .6rem", fontSize: ".9rem" }}>{c.short}</p>
              <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                <Link className="btn sm" href={`/concept/${c.id}`}>Xem concept</Link>
                <Link className="btn w sm" href={`/dat-lich?concept=${c.id}`}>Đặt luôn</Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <img src={photo("049")} alt="" />
            <div>
              <small className="soft">gợi ý cho bạn</small>
              <h3>Chọn một vibe bên trái nha 👈</h3>
              <p className="soft" style={{ margin: 0, fontSize: ".9rem" }}>Kết quả hiện ở đây.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
