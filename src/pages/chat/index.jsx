import { RiSendPlaneLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

const Chat = () => {
  return (
    <div className="text-center md:w-[80%] m-auto  mb-20  ">
      <div className="">
        <div className="m-4">IPTIJ Chat Group</div>
        <div className="bg-slate-200 rounded-md items-center ">
          <div className="flex">
            <span className="mr-4 text-4xl w-8 ml-2">
              <RxAvatar />
            </span>
            <span className="flex items-center">putra</span>
          </div>
          <div className="text-start flex">
            <span className="bg-green-700 ml-4 h-4 w-4 flex items-center justify-center mt-1 rounded-full  text-white mr-2"></span>
            <span>online</span>
          </div>
        </div>

        {/* chat */}
        <div className="mt-8">
          <div className=" ml-2 flex flex-col">
            <span className="text-start text-sm ml-8">putra 13:00</span>
            <div className=" text-start flex ">
              <span className="text-2xl mr-2">
                <RxAvatar />
              </span>
              <span className=" bg-gray-700 rounded-r-md rounded-tl-2xl text-white px-4  w-40">
                hello apa kabar ?
              </span>
            </div>
          </div>

          <div className=" ml-2 flex flex-col">
            <span className="text-end text-sm ml-8">putra 13:00</span>
            <div className=" text-end flex justify-end ">
              <span className="bg-gray-700 rounded-l-md rounded-tr-2xl text-white px-4  w-40">
                hello apa kabar ?
              </span>
              <span className="text-2xl mr-2">
                <RxAvatar />
              </span>
            </div>
          </div>
          <div className=" ml-2 flex flex-col">
            <span className="text-start text-sm ml-8">putra 13:00</span>
            <div className=" text-start flex ">
              <span className="text-2xl mr-2">
                <RxAvatar />
              </span>
              <span className=" bg-gray-700 rounded-r-md rounded-tl-2xl text-white px-4  w-40">
                hello apa kabar ?
              </span>
            </div>
          </div>

          <div className=" ml-2 flex flex-col">
            <span className="text-end text-sm ml-8">putra 13:00</span>
            <div className=" text-end flex justify-end ">
              <span className="bg-gray-700 rounded-l-md rounded-tr-2xl text-white px-4  w-40">
                hello apa kabar ?
              </span>
              <span className="text-2xl mr-2">
                <RxAvatar />
              </span>
            </div>
          </div>
        </div>
        <div className="footer h-20 flex items-center mx-4 ">
          <input
            type="text"
            placeholder="write message"
            className="border border-cyan-600 h-10 text-start p-2 rounded-md w-full"
          />
          <button className="text-white ml-4 bg-blue-600 px-3 py-2 rounded-md text-2xl ">
            <RiSendPlaneLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
