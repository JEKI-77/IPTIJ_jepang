import { RiSendPlaneLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

const Chat = () => {
  return (
    <div className="text-center w-[80%] m-auto ">
      <div>chat page</div>

      <div className="bg-orange-300 h-10 items-center">
        <div className="flex">
          <span className="mr-4 text-4xl w-8">
            <RxAvatar />
          </span>
          <span className="flex items-center">putra</span>
        </div>
        <div className="text-start flex">
          <span className="bg-green-700 h-4 w-4 flex items-center justify-center mt-1 rounded-full  text-white mr-2"></span>
          <span>online</span>
        </div>
      </div>

      <div className="body">
        <div>hello apa kabar ?</div>
        <div>baik ...</div>
        <div>besok jalan yuu...?</div>
        <div>kemana tu..</div>
      </div>
      <div className="footer  bg-white h-20 flex items-center ">
        <input
          type="text"
          placeholder="write message"
          className="border border-cyan-600 h-10 text-start p-2 rounded-md w-full"
        />
        <button className="text-white ml-4 bg-blue-600 px-3 py-2 rounded-md text-2xl ">
          {" "}
          <RiSendPlaneLine />
        </button>
      </div>
    </div>
  );
};

export default Chat;
