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
