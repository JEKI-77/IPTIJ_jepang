import { FcSms } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const router = useNavigate();

  const openChat = () => {
    router("/chat");
  };

  return (
    <div className="fixed md:bottom-20 md:right-20 bottom-10 right-8  z-50">
      <FcSms
        onClick={openChat}
        className="animate-bounce cursor-pointer text-6xl"
      />
    </div>
  );
};

export default Chat;
