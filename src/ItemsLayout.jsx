import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ItemsLayout() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col  w-full min-h-screen bg-[#34495e]">
      <div className="w-full  flex md:justify-around items-center justify-between bg-black"  data-aos="fade-down">
        <img src="/boy.png" className="w-20 max-[400px]:w-14" alt="" />
        <img src="/logo.png" className="w-32 max-[400px]:w-20" alt="" />
        <img src="/girl.png" className="w-20 max-[400px]:w-14" alt="" />
      </div>
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
}
