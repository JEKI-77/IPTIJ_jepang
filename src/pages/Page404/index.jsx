import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const router = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      router("/"); // Menggunakan router dari React Router
    }, 2000);
  }, []);

  return;
};

export default Page404;
