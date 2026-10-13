import type { Metadata } from "next";
import { STUDIO, photo } from "@/lib/data";

export const metadata: Metadata = { title: "Về MOOD" };

const H1 = { fontSize: "clamp(2.2rem,5vw,3.8rem)", margin: ".6rem 0 1rem" };

export default function About() {
  return (
    <>
      <section><div className="wrap about">
        <div>
          <span className="pill l">về MOOD</span>
          <h1 style={H1}>Studio nhỏ, nhiều mood.</h1>
          <p style={{ fontSize: "1.05rem" }}>MOOD là studio chụp ảnh ở TP.HCM dành cho các bạn nữ 18–35 thích ảnh nghệ thuật, muốn lưu lại sinh nhật, một kỷ niệm, hoặc đơn giản là một ngày thấy mình xinh.</p>
          <p>Tụi mình đầu tư vào thứ làm nên cảm xúc của tấm ảnh: bối cảnh dựng tay, trang phục chọn theo màu, ánh sáng mềm, và một ekip biết cách để bạn thoải mái trước ống kính.</p>
          <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", margin: "1rem 0 1.5rem" }}>
            <span className="pill p">phong cách riêng, không preset đại trà</span><span className="pill m">concept đổi theo mùa</span><span className="pill s">đồ + makeup có sẵn</span><span className="pill">portfolio thật trên Facebook</span>
          </div>
          <a className="btn" href={STUDIO.facebook} target="_blank" rel="noopener">Xem Facebook của MOOD</a>
        </div>
        <div className="pics"><img src={photo("005")} alt="" /><img src={photo("017")} alt="" /><img src={photo("067")} alt="" /></div>
      </div></section>
      <section style={{ paddingTop: 0 }}><div className="wrap">
        <div className="sec-head"><div><h2>MOOD chụp gì?</h2></div></div>
        <div className="pgrid">
          <div className="pkg hot"><h3>Concept cá nhân</h3><p>Sinh nhật, kỷ niệm, một phong cách bạn đang mê — dựng riêng cho bạn.</p></div>
          <div className="pkg lav"><h3>Ảnh nghệ thuật</h3><p>Ánh sáng, màu sắc, bố cục chăm chút để mỗi tấm đứng được như một tác phẩm.</p></div>
          <div className="pkg but"><h3>Cổ trang</h3><p>Tông đỏ – vàng – nhung, trang phục và phụ kiện cổ trang riêng. Hợp Tết, lễ.</p></div>
          <div className="pkg mint"><h3>Chân dung</h3><p>Nền trơn, ánh sáng một nguồn, tập trung vào ánh nhìn. Hợp làm ảnh profile.</p></div>
          <div className="pkg"><h3>Chủ đề riêng</h3><p>Bạn có ý tưởng, MOOD dựng bối cảnh. Cặp đôi, nhóm bạn đều được.</p></div>
        </div>
      </div></section>
    </>
  );
}
