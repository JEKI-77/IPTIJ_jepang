import whatsappImage from "../../../../src/assets/icon/whatsapp.png";

const Whatsapp = () => {
  const handleWhatsappClick = () => {
    const whatsappURL =
      "https://api.whatsapp.com/send/?phone=817016675994&text=Halo+saya+ingin+masuk+Grup+WA+IPTIJ+mas.+Onegaishimasu&type=phone_number&app_absent=0";

    window.location.href = whatsappURL;
  };
  return (
    <div
      onClick={handleWhatsappClick}
      className="bottom-0 right-0 fixed mr-4 mb-8 animate-bounce flex flex-col items-center cursor-pointer "
    >
      <img className="h-16 w-16 z-[999]  " src={whatsappImage} alt="" />
      <p className="text-[0.6em] text-green-800 mr-2">Join Grup</p>
    </div>
  );
};

export default Whatsapp;
