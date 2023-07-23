// eslint-disable-next-line react/prop-types
const Link = ({ title, onClick, icon, ...rest }) => {
  return (
    <div
      style={{ ...rest }}
      className="rounded-full hover:bg-red-400 font-semibold text-md px-5 py-2 text-white text-center mr-2 mb-2"
    >
      <p onClick={onClick} className="text-center flex gap-2 items-center">
        <span className="text-xl text-black items-center backdrop:">
          {icon}
        </span>
        {title}
      </p>
    </div>
  );
};

export default Link;
