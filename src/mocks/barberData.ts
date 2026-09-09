// YUNUS TOK ERKEK KUAFÖRÜ — İçerik verileri
// ⚠️ RANDEVU BAĞLANTISI: Aşağıdaki RESERVATION_URL sabiti, işletmenin
// Kolay Randevu rezervasyon sayfasına işaret eder.
// Tüm "Randevu Al" butonları (navbar, hero, hizmet, ekip, mobil, iletişim, footer)
// bu adrese gider ve yeni sekmede açılır.
export const RESERVATION_URL =
  "https://www.kolayrandevu.com/isletme/kuafor-yunus-tok?website=1";
// RESERVATION_TARGET "_blank" olduğunda randevu sayfası yeni sekmede açılır.
export const RESERVATION_TARGET = "_blank";

// 🏷️ MARKA BİLGİLERİ: İşletme adı ve logosu tek yerden güncellenir.
export const BRAND = {
  name: "YUNUS TOK ERKEK KUAFÖRÜ",
  shortName: "Yunus Tok",
  tagline: "ERKEK KUAFÖRÜ",
  logo:
    "https://storage.helloreaddy.io/project_files/6dd585c4-04b9-45e9-8132-ea11ca77c7d6/171d750d-5a38-4f54-a048-208051cb5d9c_compressed_588912093_18537610078006796_1432749352367971822_n.webp",
};

// 📞 İLETİŞİM BİLGİLERİ: Telefon, WhatsApp ve adres tek yerden değişir.
export const CONTACT = {
  phoneDisplay: "+90 541 809 54 61",
  phoneHref: "tel:+905418095461",
  whatsappHref: "https://wa.me/905418095461",
  whatsappText: "Merhaba, randevu oluşturmak istiyorum.",
  // Instagram: kullanıcı adı ve profil adresi tek yerden yönetilir.
  instagramHandle: "@kuaforyunustok",
  instagramHref: "https://www.instagram.com/kuaforyunustok/",
  address:
    "Kampüs, Kemalpaşa, Üniversite Cd. No:90 A D:105, 54050 Serdivan / Sakarya",
  mapsEmbed:
    "https://www.google.com/maps?q=Kamp%C3%BCs%20Kemalpa%C5%9Fa%20%C3%9Cniversite%20Cd.%20No%3A90%20A%20D%3A105%2054050%20Serdivan%20Sakarya&z=15&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Kamp%C3%BCs%20Kemalpa%C5%9Fa%20%C3%9Cniversite%20Cd.%20No%3A90%20A%20D%3A105%20Serdivan%20Sakarya",
};

export const HOURS = [
  { days: "Pazartesi – Cumartesi", time: "10:00 – 20:00" },
];

export const HERO_IMAGE =
  "https://readdy.ai/api/search-image?query=Cinematic%20wide%20shot%20of%20a%20luxurious%20modern%20men%20barbershop%20interior%20at%20night%2C%20dark%20charcoal%20and%20matte%20black%20walls%2C%20row%20of%20sleek%20black%20leather%20barber%20chairs%2C%20warm%20brass%20and%20gold%20pendant%20lights%20casting%20soft%20glow%2C%20large%20mirrors%20with%20subtle%20reflection%2C%20moody%20atmospheric%20premium%20grooming%20club%20ambiance%2C%20dark%20minimalist%20editorial%20photography%2C%20deep%20shadows%20and%20elegant%20composition%20with%20no%20people&width=1920&height=1200&seq=hero-barber-2026&orientation=landscape";

export const HERO_IMAGE_ALT =
  "Yunus Tok Erkek Kuaförü premium erkek kuaförü salonu iç mekan";

export interface Service {
  id: string;
  name: string;
  desc: string;
  price: string;
  duration: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "sac-kesimi",
    name: "Saç Kesimi",
    desc: "Yüz ve kafa yapına uygun modern bir kesim; detaylı makine ve makas çalışmasıyla.",
    price: "500 TL",
    duration: "45 dk",
    icon: "ri-scissors-2-line",
  },
  {
    id: "sac-sakal",
    name: "Saç + Sakal",
    desc: "Saç kesimi ve sakal tasarımının bir arada olduğu en çok tercih edilen komple bakım.",
    price: "750 TL",
    duration: "90 dk",
    icon: "ri-scissors-line",
  },
  {
    id: "sakal-tasarimi",
    name: "Sakal Tasarımı",
    desc: "Sakalını şekillendirme, sınır çekme ve istenen forma göre hassas düzeltme.",
    price: "350 TL",
    duration: "30 dk",
    icon: "ri-quill-pen-line",
  },
  {
    id: "cocuk-kesimi",
    name: "Çocuk Saç Kesimi",
    desc: "En küçük misafirler için sabırlı ve eğlenceli bir ortamda konforlu kesim.",
    price: "400 TL",
    duration: "30 dk",
    icon: "ri-gemini-line",
  },
  {
    id: "sac-bakimi",
    name: "Saç Bakımı",
    desc: "Saç derisi temizliği, güçlendirici maske ve profesyonel bakım uygulaması.",
    price: "600 TL",
    duration: "60 dk",
    icon: "ri-drop-line",
  },
];

// 💶 FİYAT NOTU: Aşağıdaki fiyatlar DEMO veridir. Gerçek fiyatlar
// açıklandığında SERVICES dizisindeki price alanlarını güncellemen yeterli.
export const SERVICES_PRICE_NOTE =
  "Fiyatlar demo amaçlıdır; güncel fiyatlar için bize ulaşın.";

export interface InstagramPost {
  // Kartta gösterilen görsel adresi (işletmenin gerçek fotoğrafı).
  imageUrl: string;
  // Gönderinin Instagram adresi (karta tıklayınca yeni sekmede açılır).
  postUrl: string;
  alt: string; // Görsel ve erişilebilirlik açıklaması
}

// 📸 GALERİ / INSTAGRAM GÖNDERİLERİ:
// Aşağıdaki INSTAGRAM_POSTS dizisi 8 kart tanımlar. Her kart { imageUrl, postUrl, alt }
// yapısındadır. imageUrl işletmenin gerçek çalışma fotoğrafıdır; postUrl ise kartın
// tıklandığında açılacağı gerçek Instagram gönderisidir. Kartlar otomatik olarak
// mobilde 2, masaüstünde 4 sütun grid'de gösterilir ve tamamına tıklanınca ilgili
// gönderi yeni sekmede açılır.
export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    imageUrl:
      "https://storage.helloreaddy.io/project_files/6dd585c4-04b9-45e9-8132-ea11ca77c7d6/f849babe-3e10-4220-951c-ea28e4593c1d_compressed_1.webp",
    postUrl: "https://www.instagram.com/p/DcT5648ITdE/",
    alt: "Yunus Tok Erkek Kuaförü modern saç kesimi çalışması",
  },
  {
    imageUrl:
      "https://storage.helloreaddy.io/project_files/6dd585c4-04b9-45e9-8132-ea11ca77c7d6/c77491ea-df65-48e8-864a-07fd3c0892ca_compressed_2.webp",
    postUrl: "https://www.instagram.com/p/DVQudXajELz/",
    alt: "Yunus Tok Erkek Kuaförü saç kesimi ve şekillendirme çalışması",
  },
  {
    imageUrl:
      "https://storage.helloreaddy.io/project_files/6dd585c4-04b9-45e9-8132-ea11ca77c7d6/3226e3c5-98a2-448f-adea-2949191e3ec8_compressed_3.webp",
    postUrl: "https://www.instagram.com/p/DU8Rqa0jFqG/",
    alt: "Yunus Tok Erkek Kuaförü saç stili ve sakal çalışması",
  },
  {
    imageUrl:
      "https://storage.helloreaddy.io/project_files/6dd585c4-04b9-45e9-8132-ea11ca77c7d6/de81f08c-6624-4f9e-ba36-003e2202864f_compressed_4.webp",
    postUrl: "https://www.instagram.com/p/DUfdmKFDBJt/",
    alt: "Yunus Tok Erkek Kuaförü kesim öncesi hazırlık çalışması",
  },
  {
    imageUrl:
      "https://storage.helloreaddy.io/project_files/6dd585c4-04b9-45e9-8132-ea11ca77c7d6/d05d36f9-fc0d-44a9-b3f4-c52c52dfe153_compressed_5.webp",
    postUrl: "https://www.instagram.com/p/DTsS6Y8DGpL/",
    alt: "Yunus Tok Erkek Kuaförü sakal sakal düzeltme çalışması",
  },
  {
    imageUrl:
      "https://storage.helloreaddy.io/project_files/6dd585c4-04b9-45e9-8132-ea11ca77c7d6/349d159c-c543-48d9-aec9-3bfcaa0121f8_compressed_6.webp",
    postUrl: "https://www.instagram.com/p/DS2NLEfDKVR/",
    alt: "Yunus Tok Erkek Kuaförü saç tasarımı çalışması",
  },
  {
    imageUrl:
      "https://storage.helloreaddy.io/project_files/6dd585c4-04b9-45e9-8132-ea11ca77c7d6/1559845d-5eec-4610-abf7-5bbdd5e1ae53_compressed_7.webp",
    postUrl: "https://www.instagram.com/p/DSuPtCYDKlG/",
    alt: "Yunus Tok Erkek Kuaförü kısa saç ve modern kesim çalışması",
  },
  {
    imageUrl:
      "https://storage.helloreaddy.io/project_files/6dd585c4-04b9-45e9-8132-ea11ca77c7d6/23f13acc-6e0d-43f0-bd54-c41788ab635d_compressed_8.webp",
    postUrl: "https://www.instagram.com/p/DSroBtNiCwH/",
    alt: "Yunus Tok Erkek Kuaförü saç kesimi sonuç çalışması",
  },
];

export interface TeamMember {
  name: string;
  desc: string;
  src: string;
  alt: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Esat Ayaz",
    desc: "15 yılı aşkın tecrübesiyle keskin fade'lerin ve klasik kesimlerin ustası.",
    src: "https://readdy.ai/api/search-image?query=Confident%20professional%20male%20barber%20portrait%20in%20his%2030s%20with%20styled%20beard%20and%20slicked%20hair%2C%20wearing%20a%20black%20barber%20apron%2C%20arms%20crossed%2C%20dark%20charcoal%20studio%20background%20with%20warm%20golden%20rim%20light%2C%20premium%20men%20grooming%20editorial%20photography%2C%20moody%20cinematic%20portrait&width=800&height=1000&seq=team-esat&orientation=portrait",
    alt: "Esat Ayaz Usta Berber Yunus Tok Erkek Kuaförü",
  },
  {
    name: "Salih Çolak",
    desc: "Modern saç stilleri ve kişiye özel styling konusunda yaratıcı dokunuşlar.",
    src: "https://readdy.ai/api/search-image?query=Stylish%20young%20professional%20male%20barber%20portrait%20with%20short%20dark%20hair%20and%20light%20beard%2C%20wearing%20black%20minimalist%20shirt%2C%20holding%20comb%2C%20dark%20studio%20background%20with%20soft%20warm%20golden%20light%2C%20premium%20men%20stylist%20editorial%20photography%2C%20modern%20cinematic%20portrait&width=800&height=1000&seq=team-salih&orientation=portrait",
    alt: "Salih Çolak Stilist Yunus Tok Erkek Kuaförü",
  },
  {
    name: "Samet Sarıbuğa",
    desc: "Sakal tasarımında detaycı, güler yüzlü ve misafir odaklı genç usta.",
    src: "https://readdy.ai/api/search-image?query=Friendly%20male%20barber%20portrait%20in%20his%2020s%20with%20textured%20haircut%20and%20neat%20beard%2C%20wearing%20black%20barber%20clothing%2C%20dark%20matte%20background%20with%20warm%20golden%20accent%20lighting%2C%20premium%20men%20grooming%20editorial%20photography%2C%20moody%20cinematic%20portrait&width=800&height=1000&seq=team-samet&orientation=portrait",
    alt: "Samet Sarıbuğa Berber Yunus Tok Erkek Kuaförü",
  },
  {
    name: "Yunus Tok",
    desc: "Salonun kurucusu ve baş ustası; misafir odaklı hizmetiyle her kesimde fark yaratır.",
    src: "https://readdy.ai/api/search-image?query=Solo%20portrait%20of%20a%20confident%20mature%20male%20barbershop%20owner%20in%20his%20late%2030s%2C%20clean%20short%20dark%20hair%20and%20neatly%20trimmed%20full%20dark%20beard%2C%20wearing%20a%20tailored%20black%20shirt%20with%20sleeves%20rolled%2C%20single%20subject%20centered%20against%20a%20solid%20dark%20charcoal%20background%20with%20warm%20golden%20rim%20light%2C%20premium%20men%20grooming%20editorial%20photography%2C%20sharp%20focus%20on%20face%2C%20elegant%20cinematic%20studio%20portrait&width=800&height=1000&seq=team-yunus&orientation=portrait&nocache=true",
    alt: "Yunus Tok Erkek Kuaförü kurucusu ve usta berber",
  },
];

export const WHY_US = [
  {
    icon: "ri-team-line",
    title: "Profesyonel Ekip",
    desc: "Alanında uzman, sürekli kendini geliştiren deneyimli berberler.",
  },
  {
    icon: "ri-vip-diamond-line",
    title: "Premium Ürünler",
    desc: "Saç ve cildine iyi gelen, seçkin markalardan profesyonel bakım.",
  },
  {
    icon: "ri-user-star-line",
    title: "Kişiye Özel Stil",
    desc: "Yüz hatlarına ve yaşam tarzına uygun, sana özel bir görünüm.",
  },
  {
    icon: "ri-calendar-check-line",
    title: "Kolay Online Randevu",
    desc: "Beklemeden, birkaç dokunuşla sana uygun saatte yerini ayırt.",
  },
];

// ⭐ YORUM & PUAN DEĞİŞTİRME NOTU:
// Aşağıdaki örnek yorumlar ve puanlar DEMO veridir. Siteni yayına aldığında
// REVIEW_SUMMARY içindeki rating/count değerlerini ve TESTIMONIALS dizisini
// Google'daki gerçek yorumların ve puanınla değiştirebilirsin. Değerler tek yerden
// güncellendiği için tüm site otomatik yansıtır.
export const REVIEW_SUMMARY = {
  rating: 4.7,
  count: 159,
  sourceLabel: "Google değerlendirmeleri",
};

export interface Testimonial {
  name: string;
  initial: string;
  text: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Burak A.",
    initial: "B",
    text: "Uzun zamandır gittiğim en iyi berber. Hem ortam hem hizmet gerçekten kaliteli. Çıkan sonuç her seferinde tam istediğim gibi.",
    date: "2 hafta önce",
  },
  {
    name: "Serkan T.",
    initial: "S",
    text: "Randevu sistemi çok pratik, bekleme derdi yok. Sakal tasarımında detaya gösterdikleri özen mükemmel.",
    date: "1 ay önce",
  },
  {
    name: "Oğuz K.",
    initial: "O",
    text: "Ortam gerçekten premium, müzik ve atmosfer harika. Mehmet usta'nın saç + sakal bakımı efsane, gönül rahatlığıyla öneririm.",
    date: "3 hafta önce",
  },
  {
    name: "Mert D.",
    initial: "M",
    text: "Kesim öncesi yüz şeklimi analiz edip bana en uygun stili önerdiler. Kendime olan güvenim yeniden geldi diyebilirim.",
    date: "2 ay önce",
  },
];

export const ABOUT_IMAGE =
  "https://readdy.ai/api/search-image?query=Luxurious%20modern%20barbershop%20interior%20corner%20with%20black%20leather%20barber%20chairs%2C%20brass%20mirrors%2C%20wood%20and%20stone%20details%2C%20warm%20artisan%20pendant%20lights%2C%20dark%20elegant%20masculine%20design%2C%20premium%20grooming%20club%20atmosphere%2C%20editorial%20interior%20photography%2C%20moody%20and%20refined%20with%20no%20people&width=1200&height=1300&seq=about-interior&orientation=portrait";