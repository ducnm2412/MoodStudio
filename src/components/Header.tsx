"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/gioi-thieu", label: "Về MOOD" },
  { href: "/concept", label: "Concept" },
  { href: "/bang-gia", label: "Bảng giá" },
  { href: "/bo-suu-tap", label: "Gallery" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" href="/"><i>♡</i>MOOD studio</Link>
        <ul id="menu" className={open ? "open" : undefined}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={active(l.href) ? "page" : undefined} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
          <li className="only-mobile"><Link href="/dat-lich" onClick={() => setOpen(false)}>Đặt lịch ✨</Link></li>
        </ul>
        <Link className="btn sm" href="/dat-lich">Đặt lịch ✨</Link>
        <button className="burger" aria-label="Mở menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>☰</button>
      </div>
    </header>
  );
}
