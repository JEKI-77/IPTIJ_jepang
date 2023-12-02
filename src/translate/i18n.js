import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from 'i18next-http-backend';

const resources = {
  id: {
    translation: {
      home: "Home",
      Gallery: "Gallery",
      waktuSholat: "Waktu Sholat",
      news: "Berita",
      Quran: "Qur'an",
      title: "Ikatan Persaudaran Trainee Indonesia di Jepang",
      tujuan: "Tujuan IPTIJ",
      visimisi:
        "Komunitas yang telah ada selama 18 tahun di Jepang yang dibentuk untuk memfasilitasi dan memperkuat hubungan antara para trainee atau peserta program pelatihan dari Indonesia yang tinggal dan bekerja di Jepang.",
      donasi: "Donasi untuk Dakwah IPTIJ",
      pengurus: "Daftar Menjadi Pengurus",
      tahsin: "Registrasi Tahsin",
      agenda: {
        title: "Agenda Kegiatan",
        kajian: "Kajian Islam",
        workshop: "Worksop",
        rekreasi: "Rekreasi",
        olahraga: "Olahraga",
      },
      quote:
        "Tidak ada beban yang diberikan kepada seseorang melainkan sesuai dengan kesanggupannya.",
      footer: {
        kontak: "Kontak",
        alamat:
          "Alamat: 4 Chome-6-6 Meguro, Meguro City, Tokyo 153-0063, Jepang",
        email: "Email: iptijofficial22@gmail.com",
        tentangKami: "Tentang Kami",
        anggota: "anggota",
        aktivitas: "aktivitas",
        sosialMedia: "Sosial Media",
        buletinkami: "Our Newslatter",
        info: "Dapatkan Informasi Terbaru Kami",
        masukanEmail: "Masukan Email Anda",
      },
      kota: "kota",
      berita: "kajian Islam Hari Ini",
      filter: {
        kajian: "kajian islam",
        beritaIndo: "Berita Indonesia",
        pilihKategori: "Pilih Kategori",
      },
    },
  },
  en: {
    translation: {
      home: "Home",
      Gallery: "Gallery",
      waktuSholat: "Pray Time",
      news: "News",
      Quran: "Qur'an",
      title: "Indonesian Trainee Brotherhood in Japan",
      tujuan: "Purpose of IPTIJ",
      visimisi:
        "A community that has existed for 18 years in Japan, formed to facilitate and strengthen the relationship among trainees or participants of training programs from Indonesia living and working in Japan.",
      donasi: "Donation for IPTIJ Preaching",
      pengurus: "Register as Administrator",
      tahsin: "Tahsin Registration",
      agenda: {
        title: "Activity Agenda",
        kajian: "Islamic Study",
        workshop: "Workshop",
        rekreasi: "Recreation",
        olahraga: "Sports",
      },
      quote: "No burden is placed on any individual beyond their capacity.",
      footer: {
        contact: "Contact",
        address:
          "Address: 4 Chome-6-6 Meguro, Meguro City, Tokyo 153-0063, Japan",
        email: "Email: iptijofficial22@gmail.com",
        aboutUs: "About Us",
        members: "Members",
        activities: "Activities",
        socialMedia: "Social Media",
        buletinkami: "Our Newsletter",
        info: "Get Our Latest Information",
        masukanEmail: "Enter Your Email ",
      },
      kota: "city",
      berita: "islamic Studies Today",
      filter: {
        kajian: "islamic studies",
        beritaIndo: "Indonesian News",
        pilihKategori: "Select Category",
      },
    },
  },
  ja: {
    translation: {
      home: "ホーム",
      Gallery: "ギャラリー",
      waktuSholat: "祈りの時間",
      news: "ニュース",
      Quran: "クルアン",
      title: "インドネシアの日本での研修生の友情",
      tujuan: "IPTIJの目的",
      visimisi:
        "インドネシアからの研修生や参加者を支援し、日本で生活・働く際の関係を促進し強化するために18年間存在しているコミュニティ。",
      donasi: "IPTIJ伝道のための寄付",
      pengurus: "管理者として登録する",
      tahsin: "タフシン登録",
      agenda: {
        title: "活動予定",
        kajian: "イスラム教の勉強会",
        workshop: "ワークショップ",
        rekreasi: "レクリエーション",
        olahraga: "スポーツ",
      },
      quote: "個人に課せられる負担は、その人の能力に合ったものです。",
      footer: {
        kontak: "コンタクト",
        alamat: "住所: 日本〒153-0063 東京都目黒区目黒４丁目６−６",
        email: "メール: iptijofficial22@gmail.com",
        tentangKami: "私たちについて",
        anggota: "メンバー",
        aktivitas: "活動",
        sosialMedia: "ソーシャルメディア",
        buletinkami: "私たちのニュースレター",
        info: "最新情報を入手する",
        masukanEmail: "あなたのメールアドレス",
      },
      kota: "都市",
      berita: "今日のイスラムニュース",
      filter: {
        kajian: "イスラム研究",
        beritaIndo: "今日のインドネシアニュース",
        pilihKategori: " カテゴリーを選択",
      },
    },
  },
};

i18n
  // .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    lng: "id", // Set default language here
    fallbackLng: "id", // Fallback language if translation not found
    interpolation: {
      escapeValue: false,
    },
    //   backend:{
    // loadPath: 'translate/locales/{{lng}}/japanese.json'
    //   }
  });

export default i18n;
