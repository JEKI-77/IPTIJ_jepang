import Banner from "../../Components/Atoms/Banner";
import "animate.css/animate.min.css";
import imgGallery1 from "../../assets/imagesIptij/img1.jpg";
import imgGallery2 from "../../assets/imagesIptij/img2.jpg";
import imgGallery3 from "../../assets/imagesIptij/img3.jpg";
import imgGallery4 from "../../assets/imagesIptij/img4.jpg";
import imgGallery5 from "../../assets/imagesIptij/img5.jpg";
import imgGallery6 from "../../assets/imagesIptij/img6.jpg";
import imgGallery9 from "../../assets/imagesIptij/img9.jpg";
import imgGallery10 from "../../assets/imagesIptij/img10.jpg";
import imgGallery11 from "../../assets/imagesIptij/img11.jpg";
import imgGallery12 from "../../assets/imagesIptij/img12.jpg";
import Svg from "../../Components/Atoms/svg";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "../../Components/Atoms/Modal";

const images = [
  imgGallery1,
  imgGallery2,
  imgGallery3,
  imgGallery4,
  imgGallery5,
  imgGallery6,
  imgGallery9,
  imgGallery10,
  imgGallery11,
  imgGallery12,
];

const Gallery = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // const clickHandler = (id) => {
  //   setIsModalOpen((prevId) => (prevId === id ? false : id));
  // };

  const clickHandler = (id) => {
    setSelectedImage(images[id - 1]); // Mendapatkan gambar yang sesuai berdasarkan id
    setIsModalOpen(true); // Membuka modal
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>IPTIJ | Gallery</title>
        <meta name="Foto kegiatan IPTIJ di Jepang" content="Halaman Gallery" />
      </Helmet>
      <Banner />
      <Svg />
      <div className="lg:col-span-12 col-span-8 mt-8  animate__animated  animate__fadeInDown mb-20">
        <p className="text-center text-3xl font-semibold">{t("Gallery")}</p>
        <hr className="mb-4 w-[50%] border-orange-400 col-span-12 m-auto" />
      </div>
      <div className="md:grid-cols-12 grid grid-cols-8 w-[95%] md:w-[80%] gap-2 m-auto mb-4">
        {/* Konten Galeri */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`box lg:col-span-${
              index === 2 || index === 2 ? "4" : "6"
            } lg:row-span-${
              index === 3 || index === 2 ? "12" : "12"
            } col-span-4 shadow-md`}
          >
            <img
              onClick={() => clickHandler(index + 1)}
              className="imgStyle"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}

        {/* Modal */}
        {isModalOpen && (
          <Modal imgSrc={selectedImage} closeModal={closeModalHandler} />
        )}
      </div>
    </>
  );
};

export default Gallery;
