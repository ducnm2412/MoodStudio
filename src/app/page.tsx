import Link from "next/link";
import { ConceptCard, PackageCard } from "@/components/Cards";
import LightboxImages from "@/components/Lightbox";
import { Quiz } from "@/components/Interactive";
import { CONCEPTS, PACKAGES, STUDIO, photo } from "@/lib/data";

const MARQ = [...CONCEPTS.map((c) => c.imgs[0]), ...CONCEPTS.map((c) => c.imgs[1])];
const WORDS = ["sinh nhật", "cổ trang", "hoa tươi", "chân dung", "cute", "mood check", "concept mới mỗi tháng", "đồ + makeup có sẵn"];
const IG = ["061", "045", "010", "016", "074", "031", "069", "084", "055", "038", "023", "079"];

const SEASONS = [
  { id: "co-trang-nhung-do", img: "004", when: "Tháng 1 – 2 · Tết", name: "Nhung đỏ cổ trang", text: "Đặt sớm, lịch Tết full nhanh." },
  { id: "ly-ly-hong", img: "048", when: "Tháng 3 – 4 · Mùa hoa", name: "Ly ly hồng", text: "Hoa tươi mỗi ngày." },
  { id: "huong-duong-chanh", img: "033", when: "Tháng 5 – 7 · Hè", name: "Nắng vàng mùa hè", text: "Hướng dương & chanh vàng." },
  { id: "cuc-trang-ao-len", img: "022", when: "Tháng 9 – 11 · Thu", name: "Cúc trắng & áo len", text: "Ấm, mềm, hơi lười." },
  { id: "gau-bong-pyjama", img: "028", when: "Tháng 12 · Đông", name: "Gấu bông & pyjama", text: "Cozy season." },
  { id: "sinh-nhat-hong", img: "059", when: "Quanh năm", name: "Sinh nhật", text: "Hồng, xanh hoặc trắng." },
];

const DEALS = [
  { bg: "var(--butter)", tag: "sinh viên", big: "-10%", name: "Thẻ sinh viên", text: "Mọi gói, mọi ngày trong tuần. Nhớ mang thẻ nha." },
  { bg: "var(--pink)", tag: "sinh nhật", big: "+5 ảnh", name: "Chụp trong tháng sinh nhật", text: "Tặng thêm 5 ảnh retouch cho concept sinh nhật." },
  { bg: "var(--mint)", tag: "bestie", big: "-15%", name: "Đi 2 người trở lên", text: "Giảm cho mỗi người khi đặt cùng một buổi." },
  { bg: "var(--sky)", tag: "T2–T5", big: "-50k", name: "Ngày trong tuần", text: "Đặt lịch từ thứ 2 đến thứ 5, khung sáng." },
];

const REVIEWS = [
  { img: "050", name: "Thảo Vy", meta: "Sinh nhật hồng · 21 tuổi", text: "Lần đầu chụp studio mà không ngại chút nào, chị makeup với anh chụp hướng dẫn pose từng tí. Ảnh về xinh hơn mình tưởng 🥹" },
  { img: "006", name: "Ngọc Hân", meta: "Nhung đỏ cổ trang", text: "Đồ cổ trang đẹp, phụ kiện đầy đủ, màu ảnh đậm đúng kiểu mình thích. Đặt lịch Tết nhớ book sớm vì full nhanh lắm." },
  { img: "065", name: "Minh Anh", meta: "Cúc đồng tiền · sinh viên", text: "Giá sinh viên hợp lý, ảnh trả đúng hẹn. Retouch tự nhiên không bị “ảo”, bạn bè hỏi chụp ở đâu suốt." },
];

const FAQ = [
  ["Mình không biết tạo dáng thì sao?", "Không sao hết. Ekip hướng dẫn từng pose, từng góc mặt. Phần lớn khách của MOOD là lần đầu chụp studio."],
  ["Có cần mang trang phục không?", "Không. Trang phục, phụ kiện, makeup và làm tóc đã gồm trong gói. Bạn chỉ cần mang theo món đồ riêng nếu muốn nó xuất hiện trong ảnh."],
  ["Bao lâu nhận được ảnh?", "Chọn ảnh ngay tại studio sau buổi chụp. Ảnh retouch trả trong 5–7 ngày làm việc qua Google Drive. Cần gấp hơn, nhắn trước để studio sắp xếp."],
  ["Đi 2 người hoặc nhóm thì tính thế nào?", "Chọn “2 người” hoặc “Nhóm 3–5 người” khi đặt lịch, giá tính theo từng người và có giảm 15% cho mỗi người. Nhóm lớn hơn nhắn Zalo để báo giá riêng."],
  ["Đổi hoặc huỷ lịch được không?", "Đổi lịch miễn phí trước 48 giờ. Huỷ sát giờ có thể mất cọc (nếu có), studio sẽ báo rõ khi xác nhận."],
  ["Chụp cổ trang có cần đặt sớm hơn không?", "Có. Concept cổ trang cần thời gian chuẩn bị tóc và trang phục, nên đặt trước 3–5 ngày; dịp Tết nên đặt trước 2 tuần."],
];

export default function Home() {
  return (
    <>
      <section className="hero"><div className="wrap">
        <div className="hero-top">
          <span className="pill p">✿ studio chụp ảnh concept · Sài Gòn</span>
          <h1 style={{ marginTop: "1rem" }}>Chụp một bộ ảnh <span>cute</span> đúng <b>mood</b> của bạn</h1>
          <p>Concept sinh nhật, hoa, cổ trang, chân dung… trang phục + makeup có sẵn. Tới studio, chọn mood, chụp thôi.</p>
          <div className="hero-actions"><Link className="btn" href="/dat-lich">Đặt lịch chụp</Link><Link className="btn w" href="/concept">Xem concept</Link></div>
        </div>
        <div className="bento">
          <div className="ph a"><img src={photo("049")} alt="Sinh nhật hồng" /><span className="cap">sinh nhật hồng</span></div>
          <div className="ph b"><img src={photo("044")} alt="Ly ly hồng" /><span className="cap">ly ly hồng</span></div>
          <div className="ph c"><img src={photo("003")} alt="Cổ trang" /><span className="cap">cổ trang</span></div>
          <div className="blob d" style={{ background: "var(--butter)" }}><div><strong>{CONCEPTS.length}</strong><small>concept</small></div></div>
          <div className="ph c"><img src={photo("062")} alt="Cúc đồng tiền" /></div>
          <div className="ph d"><img src={photo("027")} alt="Gấu bông" /></div>
          <div className="ph d"><img src={photo("053")} alt="Sinh nhật xanh" /></div>
          <div className="blob e" style={{ background: "var(--mint)" }}><div><strong>5–7 ngày</strong><small>trả ảnh retouch</small></div></div>
          <div className="ph e"><img src={photo("020")} alt="Ren trắng" /><span className="cap">ren trắng</span></div>
          <div className="ph d"><img src={photo("072")} alt="Chanh vàng" /></div>
          <div className="ph d"><img src={photo("036")} alt="Chân dung" /></div>
          <span className="sticker" style={{ right: -6, top: -14, background: "var(--hot)", color: "#fff" }}>new concept mỗi tháng!</span>
        </div>
      </div></section>

      <div className="textmarq" aria-hidden="true"><div className="track">{[...WORDS, ...WORDS, ...WORDS].map((w, i) => <span key={i}>✦ {w}</span>)}</div></div>
      <div className="marq" aria-hidden="true"><div className="track">{[...MARQ, ...MARQ].map((k, i) => <img key={i} src={photo(k)} alt="" loading="lazy" />)}</div></div>

      <section><div className="wrap">
        <div className="sec-head"><div><h2>Concept đang hot 🔥</h2><p>Được chụp nhiều nhất tháng này. Mỗi concept có sẵn trang phục, phụ kiện và makeup đi kèm.</p></div><Link className="btn w sm" href="/concept">Tất cả concept</Link></div>
        <div className="cgrid">{CONCEPTS.slice(0, 4).map((c) => <ConceptCard key={c.id} c={c} />)}</div>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head"><div><h2>Chụp ở MOOD như thế nào? 🫶</h2><p>Bốn bước, không cần chuẩn bị gì nhiều.</p></div></div>
        <div className="steps">
          <div className="step"><h3>Chọn concept</h3><img src={photo("046")} alt="" /><p>Lướt {CONCEPTS.length} concept, hoặc làm quiz “mood hôm nay” bên dưới để MOOD gợi ý.</p></div>
          <div className="step"><h3>Đặt lịch</h3><img src={photo("052")} alt="" /><p>Điền form hoặc nhắn Zalo. Studio xác nhận trong ngày, đổi lịch miễn phí trước 48 giờ.</p></div>
          <div className="step"><h3>Tới studio, chọn đồ + makeup</h3><img src={photo("009")} alt="" /><p>Đến sớm 15 phút. Trang phục, phụ kiện, makeup, làm tóc có sẵn theo concept.</p></div>
          <div className="step"><h3>Nhận ảnh</h3><img src={photo("064")} alt="" /><p>Chọn ảnh ngay tại studio, nhận ảnh retouch sau 5–7 ngày qua Google Drive.</p></div>
        </div>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap"><Quiz /></div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="stats">
          <div className="stat" style={{ background: "var(--pink)" }}><b>{CONCEPTS.length}</b><span>concept đang mở</span></div>
          <div className="stat" style={{ background: "var(--butter)" }}><b>50+</b><span>bộ trang phục & phụ kiện</span></div>
          <div className="stat" style={{ background: "var(--mint)" }}><b>1,5h</b><span>buổi chụp trung bình</span></div>
          <div className="stat" style={{ background: "var(--sky)" }}><b>5–7</b><span>ngày trả ảnh retouch</span></div>
          <div className="stat" style={{ background: "var(--lav)" }}><b>100%</b><span>đồ & makeup có sẵn</span></div>
        </div>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head"><div><h2>Concept theo mùa 🗓️</h2><p>Mỗi dịp một mood. Kéo ngang để xem.</p></div></div>
        <div className="season">
          {SEASONS.map((s) => (
            <Link key={s.id} href={`/concept/${s.id}`}><img src={photo(s.img)} alt="" /><div className="when">{s.when}</div><h3>{s.name}</h3><p>{s.text}</p></Link>
          ))}
        </div>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head"><div><h2>Ưu đãi đang chạy 🎁</h2><p>Áp dụng khi đặt lịch qua website hoặc Zalo.</p></div></div>
        <div className="deals">
          {DEALS.map((d) => (
            <div key={d.name} className="deal" style={{ background: d.bg }}><span className="sticker">{d.tag}</span><div className="big">{d.big}</div><h3>{d.name}</h3><p>{d.text}</p></div>
          ))}
        </div>
        <p className="note">Không cộng gộp các ưu đãi. Chương trình có thể thay đổi, nhắn Zalo để xác nhận trước khi đặt.</p>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head"><div><h2>Tới tay không cũng được 👗</h2><p>Studio có sẵn gần như mọi thứ cho buổi chụp.</p></div></div>
        <div className="outfit">
          <div style={{ background: "#fff" }}><span>👗</span>50+ bộ váy, áo yếm, áo dài cách tân, pyjama</div>
          <div style={{ background: "var(--pink)" }}><span>💄</span>Makeup & làm tóc theo concept, chỉnh theo mặt bạn</div>
          <div style={{ background: "var(--butter)" }}><span>💐</span>Hoa tươi mỗi ngày: ly, cúc, hướng dương, mẫu đơn</div>
          <div style={{ background: "var(--mint)" }}><span>🎈</span>Bóng số tuổi, bánh kem, gấu bông, ngọc trai, nơ</div>
          <div style={{ background: "var(--lav)" }}><span>📸</span>Chọn ảnh ngay tại chỗ trên màn hình lớn</div>
        </div>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head"><div><h2>Khách nói gì 💬</h2><p>Review thật được gom từ Facebook của studio.</p></div><a className="btn w sm" href={STUDIO.facebook} target="_blank" rel="noopener">Xem thêm review</a></div>
        <div className="reviews">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rv"><div className="who"><img src={photo(r.img)} alt="" /><div><b>{r.name}</b><small>{r.meta}</small></div></div><div className="stars">★★★★★</div><p>{r.text}</p></div>
          ))}
        </div>
        <p className="note">Tên và nội dung review ở bản demo là mẫu, studio thay bằng review thật khi đưa vào sử dụng.</p>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head"><div><h2>#moodstudio 📷</h2><p>Khoảnh khắc mới nhất từ studio. Bấm vào ảnh để xem to.</p></div><a className="btn lav sm" href={STUDIO.facebook} target="_blank" rel="noopener">Follow MOOD</a></div>
        <LightboxImages keys={IG} alt="Ảnh MOOD Studio" className="ig" loading="lazy" />
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap faq-wrap">
        <div>
          <span className="pill m">hỏi nhanh</span>
          <h2 style={{ margin: ".6rem 0 .5rem" }}>Câu hỏi hay gặp ❓</h2>
          <p className="soft">Chưa thấy câu trả lời? Nhắn Zalo <a href={STUDIO.zalo}><b>{STUDIO.phoneDisplay}</b></a>, MOOD trả lời trong giờ làm việc.</p>
          <img src={photo("014")} alt="" style={{ borderRadius: 20, border: "2.5px solid var(--ink)", boxShadow: "4px 4px 0 var(--ink)", marginTop: "1rem", aspectRatio: "4/5", objectFit: "cover" }} />
        </div>
        <div className="faq">{FAQ.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap about">
        <div className="pics"><img src={photo("001")} alt="Studio" /><img src={photo("057")} alt="" /><img src={photo("024")} alt="" /></div>
        <div>
          <h2>Không cần biết tạo dáng. Thật đó.</h2>
          <div style={{ marginTop: "1.2rem" }}>
            <div className="bubble">mình chưa chụp studio bao giờ, ngại lắm 🥲</div>
            <div className="bubble me">ok không sao! ekip sẽ hướng dẫn từng pose, tới nơi chọn đồ + makeup là xong ✨</div>
            <div className="bubble">có concept sinh nhật tuổi 22 không?</div>
            <div className="bubble me">có nè, bóng số + bánh kem + váy tulle hồng hoặc xanh 🎂</div>
          </div>
          <Link className="btn lav" href="/gioi-thieu">Hiểu thêm về MOOD</Link>
        </div>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head"><div><h2>Gói chụp</h2><p>Đã gồm trang phục, phụ kiện, makeup, làm tóc và ảnh retouch.</p></div><Link className="btn w sm" href="/bang-gia">Bảng giá đầy đủ</Link></div>
        <div className="pgrid">{PACKAGES.slice(0, 3).map((p) => <PackageCard key={p.id} p={p} />)}</div>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap" style={{ background: "var(--hot)", color: "#fff", border: "2.5px solid var(--ink)", borderRadius: 28, padding: "3rem 1.5rem", textAlign: "center", boxShadow: "6px 6px 0 var(--ink)" }}>
        <h2>Sinh nhật sắp tới? Tóc vừa đẹp? Đang vui?</h2>
        <p style={{ margin: "1rem auto 1.5rem", maxWidth: "30em", fontWeight: 600 }}>Lý do nào cũng xứng đáng có một bộ ảnh. Chọn concept, chọn ngày, để lại Zalo — MOOD gọi lại trong ngày.</p>
        <Link className="btn w" href="/dat-lich">Đặt lịch ngay 🎀</Link>
      </div></section>
    </>
  );
}
