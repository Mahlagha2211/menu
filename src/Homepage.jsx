import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

export default function Homepage() {
  const { setopen } = useOutletContext();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="bg-[#34495e] h-screen w-full flex justify-center items-center relative">
      <FaBars
        className="absolute top-[10px] cursor-pointer left-[15px]  w-10 h-10 bg-[#E1e2e1] p-1 rounded-lg"
        onClick={() => setopen(true)}
      />

      <img src="/logo.png" className="w-[600px]" data-aos="fade-down" alt="" />
    </div>
  );
}
