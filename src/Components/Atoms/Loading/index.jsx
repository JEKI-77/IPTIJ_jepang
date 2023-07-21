import ReactLoading from "react-loading";

const index = () => {
  return (
    <span className="w-screen flex  justify-center items-center">
      <ReactLoading
        type={"cylon"}
        color={"black"}
        height={"100px"}
        width={"100px"}
      />
    </span>
  );
};

export default index;
