/* eslint-disable react/prop-types */

const Modal = ({ imgSrc, closeModal }) => {
  return (
    <div className="fixed z-[999] inset-0  flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/* konten modal */}
        <img className="object-cover w-full h-auto " src={imgSrc} alt="" />
        {/* tombol close */}
        <button
          className="absolute top-0 right-0 m-4 text-white md:text-xl bg-gray-800 px-3 py-1 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
