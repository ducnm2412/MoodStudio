import Link from "next/link";
import { PILL, photo, type Concept, type Package } from "@/lib/data";

export function ConceptCard({ c }: { c: Concept }) {
  const stack = c.imgs.slice(0, 3).reverse();
  return (
    <Link className="ccard" href={`/concept/${c.id}`}>
      <span className={`pill ${PILL[c.cat] ?? ""}`}>{c.emoji} {c.cat}</span>
      <div className="stack">{stack.map((k) => <img key={k} src={photo(k)} alt={c.name} loading="lazy" />)}</div>
      <h3>{c.name}</h3>
      <p>{c.short}</p>
      <div className="likes">📸 {c.imgs.length} ảnh mẫu · {c.time}</div>
    </Link>
  );
}

export function PackageCard({ p }: { p: Package }) {
  return (
    <div className={`pkg ${p.cls}`}>
      {p.tag && <span className="sticker">{p.tag} 🔥</span>}
      <h3>{p.name}</h3>
      <div className="price">{p.price}<small>đ / buổi</small></div>
      <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
      <Link className={`btn${p.cls === "hot" ? "" : " w"}`} href={`/dat-lich?pkg=${p.id}`}>Chọn gói này</Link>
    </div>
  );
}
