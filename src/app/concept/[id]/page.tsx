import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LightboxImages from "@/components/Lightbox";
import { CONCEPTS, PILL, photo } from "@/lib/data";

export function generateStaticParams() {
  return CONCEPTS.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: PageProps<"/concept/[id]">): Promise<Metadata> {
  const { id } = await params;
  const c = CONCEPTS.find((x) => x.id === id);
  return c ? { title: c.name, description: c.short } : {};
}

export default async function ConceptDetail({ params }: PageProps<"/concept/[id]">) {
  const { id } = await params;
  const c = CONCEPTS.find((x) => x.id === id);
  if (!c) notFound();
  const rel = CONCEPTS.filter((x) => x.cat === c.cat && x.id !== c.id).slice(0, 3);

  return (
    <section><div className="wrap">
      <Link className="back" href="/concept">← tất cả concept</Link>
      <div className="detail">
        <LightboxImages keys={c.imgs} alt={c.name} className="gallery" />
        <div className="sticky">
          <span className={`pill ${PILL[c.cat] ?? ""}`}>{c.emoji} {c.cat}</span>
          <h1>{c.name}</h1>
          <p className="soft">{c.desc}</p>
          <dl className="meta">
            <dt>Trang phục</dt><dd>{c.outfit}</dd>
            <dt>Thời gian</dt><dd>{c.time}</dd>
            <dt>Gói phù hợp</dt><dd>{c.pkg}</dd>
            <dt>Ảnh mẫu</dt><dd>{c.imgs.length} ảnh</dd>
          </dl>
          <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
            <Link className="btn" href={`/dat-lich?concept=${c.id}`}>Chọn concept này</Link>
            <Link className="btn w" href="/bang-gia">Bảng giá</Link>
          </div>
          {rel.length > 0 && <>
            <h3 style={{ marginTop: "1.8rem" }}>Cùng vibe</h3>
            <div className="rel">{rel.map((r) => <Link key={r.id} href={`/concept/${r.id}`} title={r.name}><img src={photo(r.imgs[0])} alt={r.name} /></Link>)}</div>
          </>}
        </div>
      </div>
    </div></section>
  );
}
