import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <span className="w-screen flex h-screen  justify-center items-center">
      <ReactLoading
        type={"cylon"}
        color={"black"}
        height={"100px"}
        width={"100px"}
      />
    </span>
  );
};

export default Loading;
