/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { RiSendPlaneLine } from "react-icons/ri";
// import { RxAvatar } from "react-icons/rx";
import "./chat.scss";
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [Value, setValue] = useState([]);
  console.log("msg", messageList);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,

        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // Filter pesan agar tidak menampilkan pesan dari diri sendiri
      if (data.author !== username) {
        setMessageList((list) => [...list, data]);
      }
    });
  }, [socket, username]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => {
            return (
              <div
                key={index}
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;

// <div className="text-center md:w-[80%] m-auto  mb-20  ">
//   <div className="">
//     <div className="m-4">IPTIJ Chat Group</div>
//     <div className="bg-slate-200 rounded-md items-center ">
//       <div className="flex">
//         <span className="mr-4 text-4xl w-8 ml-2">
//           <RxAvatar />
//         </span>
//         <span className="flex items-center">putra</span>
//       </div>
//       <div className="text-start flex">
//         <span className="bg-green-700 ml-4 h-4 w-4 flex items-center justify-center mt-1 rounded-full  text-white mr-2"></span>
//         <span>online</span>
//       </div>
//     </div>

//     {/* chat */}
//     <div className="mt-8">
//       <div className=" ml-2 flex flex-col">
//         <span className="text-start text-sm ml-8">putra 13:00</span>
//         <div className=" text-start flex ">
//           <span className="text-2xl mr-2">
//             <RxAvatar />
//           </span>
//           <span className=" bg-gray-700 rounded-r-md rounded-tl-2xl text-white px-4  w-40">
//             hello apa kabar ?
//           </span>
//         </div>
//       </div>

//       <div className=" mr-2 flex flex-col">
//         <span className="text-end text-sm mr-8">putra 13:00</span>
//         <div className=" text-end flex justify-end ">
//           <span className="bg-gray-700 rounded-l-md rounded-tr-2xl text-white px-4  w-40">
//             hello apa kabar ?
//           </span>
//           <span className="text-2xl ml-2">
//             <RxAvatar />
//           </span>
//         </div>
//       </div>
//       <div className=" ml-2 flex flex-col">
//         <span className="text-start text-sm ml-8">putra 13:00</span>
//         <div className=" text-start flex ">
//           <span className="text-2xl m-2">
//             <RxAvatar />
//           </span>
//           <span className=" bg-gray-700 rounded-r-md rounded-tl-2xl text-white px-4 w-40">
//             hello apa kabar ?
//           </span>
//         </div>
//       </div>

//       <div className=" mr-2 flex flex-col">
//         <span className="text-end text-sm mr-8">putra 13:00</span>
//         <div className=" text-end flex justify-end ">
//           <span className="bg-gray-700 rounded-l-md rounded-tr-2xl text-white px-4  w-40">
//             hello apa kabar ?
//           </span>
//           <span className="text-2xl ml-2">
//             <RxAvatar />
//           </span>
//         </div>
//       </div>
//     </div>
//     <div className="footer h-20 flex items-center mx-4 ">
//       <input
//         type="text"
//         placeholder="write message"
//         className="border border-cyan-600 h-10 text-start p-2 rounded-md w-full"
//       />
//       <button className="text-white ml-4 bg-blue-600 px-3 py-2 rounded-md text-2xl ">
//         <RiSendPlaneLine />
//       </button>
//     </div>
//   </div>
// </div>
