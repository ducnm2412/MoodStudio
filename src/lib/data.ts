export const STUDIO = {
  name: "MOOD Studio",
  phone: "0866138799",
  phoneDisplay: "0866 138 799",
  zalo: "https://zalo.me/0866138799",
  facebook: "https://www.facebook.com/profile.php?id=61592669727656",
  messenger: "https://m.me/61592669727656",
  maps: "https://www.google.com/maps/search/MOOD+STUDIO+Ho+Chi+Minh",
  city: "TP. Hồ Chí Minh",
  hours: "9:00 – 20:00 hằng ngày",
};

export const photo = (k: string) => `/photos/${k}.jpg`;

export type Concept = { id: string; name: string; cat: string; emoji: string; short: string; desc: string; imgs: string[]; outfit: string; time: string; pkg: string };
export const CONCEPTS: Concept[] = [
  {id:'sinh-nhat-hong', name:'Sinh nhật hồng', cat:'Sinh nhật', emoji:'🎂', short:'Váy tulle hồng, bóng số tuổi, bánh kem — bộ ảnh sinh nhật mộng mơ.', desc:'Concept sinh nhật được chụp nhiều nhất ở MOOD: váy tulle hồng bồng bềnh, bóng bay số tuổi, bánh kem và nền hồng pastel. Có thể đổi sang tông xanh hoặc trắng.', imgs:['049','050','052','057','059','051','058','060','061'], outfit:'Váy tulle hồng, trắng hoặc xanh pastel', time:'1,5–2 giờ', pkg:'Gói Mood'},
  {id:'co-trang-nhung-do', name:'Nhung đỏ cổ trang', cat:'Cổ trang', emoji:'🏮', short:'Rèm nhung đỏ, quạt lụa, mẫu đơn — rực rỡ cho mùa Tết.', desc:'Rèm nhung đỏ, trang phục cổ trang cách tân, quạt lụa và hoa mẫu đơn. Ánh sáng ấm, màu đậm, hợp Tết, sinh nhật hoặc một bộ ảnh thật rực rỡ.', imgs:['003','004','005','006','008','007','009','010','011','002'], outfit:'Áo yếm/áo dài cách tân đỏ, quạt, trâm cài', time:'2–2,5 giờ', pkg:'Gói Signature hoặc Gói Cổ trang'},
  {id:'ly-ly-hong', name:'Ly ly hồng', cat:'Hoa', emoji:'🌸', short:'Hoa ly cài tóc, sơ mi trắng hoặc áo hồng — rực mà vẫn dịu.', desc:'Hoa ly hồng tươi cài tóc hoặc cầm tay, phối sơ mi trắng hoặc áo hồng pastel. Nhiều ảnh cận mặt, tôn nét và màu da.', imgs:['044','046','048','041','043','045','047','040','042'], outfit:'Sơ mi trắng, áo hồng, hoa ly tươi', time:'1,5 giờ', pkg:'Gói Mood'},
  {id:'sinh-nhat-xanh', name:'Sinh nhật xanh pastel', cat:'Sinh nhật', emoji:'🎈', short:'Tông xanh baby, bóng bạc số tuổi, váy tay phồng.', desc:'Biến thể xanh pastel của concept sinh nhật: váy xanh baby tay phồng, bóng bạc số tuổi. Hợp bạn thích tông lạnh, nhẹ nhàng.', imgs:['053','054','056','055'], outfit:'Váy xanh pastel, nơ, bóng số', time:'1,5–2 giờ', pkg:'Gói Mood'},
  {id:'cuc-dong-tien', name:'Cúc đồng tiền', cat:'Hoa', emoji:'🌼', short:'Cúc đồng tiền hồng, khăn voan ngọc trai — vui và nhiều màu.', desc:'Hoa cúc đồng tiền hồng, khăn voan đính ngọc trai, nền be sáng. Concept tươi vui, nhiều màu, hợp bạn thích ảnh rạng rỡ.', imgs:['062','064','066','063','065'], outfit:'Áo ống trắng, khăn voan ngọc trai, hoa tươi', time:'1,5 giờ', pkg:'Gói Mood'},
  {id:'gau-bong-pyjama', name:'Gấu bông & pyjama', cat:'Cute', emoji:'🧸', short:'Áo len xám, gấu bông, giường trắng — ấm cúng, đáng yêu.', desc:'Concept “ở nhà” với áo len xám rộng, gấu bông và chăn gối trắng. Không cần tạo dáng nhiều, thoải mái là ảnh đẹp.', imgs:['027','028','030','029','031'], outfit:'Áo len xám, áo ống trắng, gấu bông (có sẵn)', time:'1 giờ', pkg:'Gói Basic'},
  {id:'bong-bay-trang', name:'Bóng bay trắng', cat:'Sinh nhật', emoji:'🤍', short:'Váy trắng, bóng bay trong suốt — trong trẻo, tinh khôi.', desc:'Nền trắng kem, váy trắng xoè nhẹ và bóng bay trong suốt. Tối giản, hợp sinh nhật tuổi 18–22 hoặc bộ ảnh kỷ niệm nhẹ nhàng.', imgs:['012','013','014','015','016'], outfit:'Váy trắng xoè, ngọc trai', time:'1,5 giờ', pkg:'Gói Basic hoặc Gói Mood'},
  {id:'huong-duong-chanh', name:'Nắng vàng mùa hè', cat:'Hoa', emoji:'🍋', short:'Hướng dương, chanh vàng, áo vàng nhạt — ấm như chiều nắng.', desc:'Hai biến thể: hướng dương với áo len vàng, hoặc chanh vàng tươi với áo kem. Tông vàng nhạt, ánh sáng mềm, rất hợp da châu Á.', imgs:['032','033','035','072','074','076','034','071','073','075'], outfit:'Áo len vàng, áo kem, hướng dương hoặc chanh', time:'1,5–2 giờ', pkg:'Gói Mood'},
  {id:'ren-trang-tieu-thu', name:'Ren trắng tiểu thư', cat:'Cute', emoji:'🎀', short:'Váy ren trắng dáng dài, tóc xoã tự nhiên — thanh lịch.', desc:'Váy ren trắng dáng dài, nền kem sáng, ánh sáng tự nhiên. Tôn dáng, nhẹ nhàng, không bao giờ lỗi mốt.', imgs:['020','017','019','021','018'], outfit:'Váy ren trắng, phụ kiện tối giản', time:'1,5 giờ', pkg:'Gói Mood'},
  {id:'cuc-trang-ao-len', name:'Cúc trắng & áo len kem', cat:'Hoa', emoji:'☁️', short:'Áo len kem trễ vai, cúc trắng — mềm như sáng mùa thu.', desc:'Áo len kem trễ vai, hoa cúc trắng và nền be ấm. Giản dị, ấm áp, tập trung vào biểu cảm và ánh mắt.', imgs:['024','022','025','026','023'], outfit:'Áo len kem/trắng, hoa cúc tươi', time:'1,5 giờ', pkg:'Gói Basic'},
  {id:'vintage-hoa-xanh', name:'Vintage hoa xanh', cat:'Cute', emoji:'💙', short:'Tóc tết, hoa xanh cài, áo yếm ren — mộc mạc, hoài cổ.', desc:'Tóc tết lệch cài hoa xanh, áo yếm ren trắng, nền be mộc. Nhẹ nhàng, hơi vintage, ăn ảnh cả trong và ngoài studio.', imgs:['067','068','070','069'], outfit:'Áo yếm ren, hoa xanh cài tóc', time:'1,5 giờ', pkg:'Gói Basic hoặc Gói Mood'},
  {id:'chan-dung-den', name:'Chân dung nền đen', cat:'Chân dung', emoji:'🖤', short:'Nền đen, áo đen, một nguồn sáng — tối giản và sâu.', desc:'Nền đen, trang phục đen, ánh sáng một nguồn. Tập trung hoàn toàn vào gương mặt và biểu cảm. Hợp làm ảnh profile, hồ sơ.', imgs:['036','037','039','038'], outfit:'Áo đen trơn (có sẵn)', time:'1 giờ', pkg:'Gói Basic'},
  {id:'ruou-vang-am', name:'Ly vang ấm', cat:'Chân dung', emoji:'🍷', short:'Tóc xoăn, ly rượu, đèn vàng — quyến rũ, điện ảnh.', desc:'Tóc xoăn bồng, ly rượu vang, ánh đèn vàng ấm trên nền tối. Màu điện ảnh, hợp bộ ảnh tuổi 25–35.', imgs:['081','083','085','082','084'], outfit:'Váy hai dây kem, phụ kiện tối giản', time:'1,5 giờ', pkg:'Gói Mood'},
  {id:'jeans-casual', name:'Jeans ngày thường', cat:'Chân dung', emoji:'👖', short:'Áo ống kem, jeans, nền trơn — đơn giản, tự nhiên.', desc:'Nền trơn, áo ống kem, quần jeans, tạo dáng tự nhiên. Ảnh đời thường nhưng vẫn có chất studio.', imgs:['078','080','077','079'], outfit:'Áo ống kem, jeans (mang theo hoặc mượn)', time:'1 giờ', pkg:'Gói Basic'}
];
export const CATEGORIES = [...new Set(CONCEPTS.map((c) => c.cat))];
export const PILL: Record<string, string> = { "Sinh nhật": "p", "Cổ trang": "", Hoa: "m", Cute: "l", "Chân dung": "s" };

export type Package = { id: string; name: string; price: string; cls: string; tag?: string; items: string[] };
export const PACKAGES: Package[] = [
  {id:'basic', name:'Gói Basic', price:'599.000', cls:'mint', items:['1 concept','15 ảnh retouch','Đồ & phụ kiện có sẵn','Makeup & tóc nhẹ','Chụp 1–1,5 giờ']},
  {id:'mood', name:'Gói Mood', price:'899.000', cls:'hot', tag:'hot nhất', items:['2 concept tự chọn','25 ảnh retouch','Đồ & phụ kiện có sẵn','Makeup & tóc theo concept','Chụp 2 giờ','Tặng 1 ảnh in 13×18']},
  {id:'signature', name:'Gói Signature', price:'1.390.000', cls:'lav', items:['3 concept tự chọn','40 ảnh retouch + file gốc','Đồ & phụ kiện có sẵn','Makeup & tóc theo concept','Chụp 3 giờ','Tặng 3 ảnh in 13×18']},
  {id:'cotrang', name:'Gói Cổ trang', price:'1.590.000', cls:'but', items:['1 concept cổ trang + 1 thường','30 ảnh retouch','Trang phục cổ trang riêng','Makeup & tóc cổ trang','Chụp 3 giờ']}
];

export const STATUS: Record<string, string> = {
  new: "Mới",
  contacted: "Đã liên hệ",
  confirmed: "Đã xác nhận",
  cancelled: "Đã huỷ",
};

export type Booking = {
  id: string;
  createdAt: string;
  status: keyof typeof STATUS | string;
  name: string;
  phone: string;
  concept: string;
  pkg: string;
  date: string;
  time: string;
  people: string;
  note: string;
};
