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
      <div className="w-full h-28 flex md:justify-around justify-between  bg-black"  data-aos="fade-down">
        <img src="/boy.png" alt="" />
        <img src="/logo.png" className="md:w-40 w-28" alt="" />
        <img src="/girl.png" alt="" />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
