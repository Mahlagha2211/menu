import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiLogin } from "react-icons/hi";
export default function Homepagelayout() {
  const [open, setopen] = useState(false);
  return open ? (
    <div className="w-full h-screen relative bg-[#e1e2e1] flex flex-col items-center gap-y-10 pt-[10px]">
      <div>
        <FaTimes
          className="absolute top-[15px] left-[15px] cursor-pointer w-7 h-7"
          onClick={() => setopen(false)}
        />
        <p className="text-2xl text-[#34495e] text-shadow-[1px_1px_0px_#263544]">
          Savoring a moment in life
        </p>
      </div>
      <div>
        <img src="/lavella.png" className="w-64" alt="" />
      </div>
      <div className="w-full px-5 space-y-1">
        <div className="flex items-center cursor-pointer rounded-lg p-2 gap-x-3 bg-[#34495e] text-white">
          <FaInstagram className="border rounded-full w-10 h-10 p-2" />
          <p>لاولا در اینستاگرام</p>
        </div>
        <div className="flex items-center cursor-pointer rounded-lg p-2 gap-x-3 bg-[#34495e] text-white">
          <FaMapMarkerAlt className="border rounded-full w-10 h-10 p-2" />
          <p> لاولا در نقشه</p>
        </div>
        <div className="flex items-center cursor-pointer rounded-lg p-2 gap-x-3 bg-[#34495e] text-white">
          <HiLogin className="border rounded-full w-10 h-10 p-2" /> <p>ورود</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex overflow-hidden w-full">
      <Sidebar />
      <div className="grow sm:pr-[100px] pr-[80px]">
        <Outlet context={{ setopen }} />
      </div>
    </div>
  );
}
