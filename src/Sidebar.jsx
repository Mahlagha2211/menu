import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [x, setx] = useState(false);
  return (
    <div className="bg-[#E1E2E1] min-h-screen  fixed right-0 top-0 w-[100px] flex flex-col p-2 gap-y-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `sidebar  ${isActive ? "!bg-[#000000]" : ""}`
        }
      >
        {({ isActive }) => (
          <>
            <img
              src="/logo.png"
              className={`w-full ${isActive ? "hidden" : ""}`}
              alt=""
            />
            <p>صفحه اصلی</p>
          </>
        )}
      </NavLink>
      <NavLink
        to="/items/hotCoffee"
        className={({ isActive }) => `sidebar  ${isActive ? "!bg-black" : ""}`}
      >
        {({ isActive }) => (
          <>
            <img
              src="/icon/hotCoffee.png"
              className={`${isActive ? "hidden" : ""}`}
              alt=""
            />
            <p>قهوه گرم</p>
          </>
        )}
      </NavLink>
      <NavLink
        to="/items/iceCoffee"
        className={({ isActive }) => `sidebar  ${isActive ? "!bg-black" : ""}`}
      >
        {({ isActive }) => (
          <>
            <img
              src="/icon/iceCoffee.png"
              className={`${isActive ? "hidden" : ""}`}
              alt=""
            />
            <p>قهوه سرد</p>
          </>
        )}
      </NavLink>
      <NavLink
        to="/items/hotDrink"
        className={({ isActive }) => `sidebar  ${isActive ? "!bg-black" : ""}`}
      >
        {({ isActive }) => (
          <>
            <img
              src="/icon/hotDrink.png"
              className={`${isActive ? "hidden" : ""}`}
              alt=""
            />
            <p>نوشیدنی گرم</p>
          </>
        )}
      </NavLink>
      <NavLink
        to="/items/mocktail"
        className={({ isActive }) => `sidebar  ${isActive ? "!bg-black" : ""}`}
      >
        {({ isActive }) => (
          <>
            <img
              src="/icon/mocktail.png"
              className={`${isActive ? "hidden" : ""}`}
              alt=""
            />
            <p>ماکتیل</p>
          </>
        )}
      </NavLink>
      <NavLink
        to="/items/smoothie"
        className={({ isActive }) => `sidebar  ${isActive ? "!bg-black" : ""}`}
      >
        {({ isActive }) => (
          <>
            <img
              src="/icon/smoothie.png"
              className={`${isActive ? "hidden" : ""}`}
              alt=""
            />
            <p>اسموتی</p>
          </>
        )}
      </NavLink>
      <NavLink
        to="/items/milkShake"
        className={({ isActive }) => `sidebar  ${isActive ? "!bg-black" : ""}`}
      >
        {({ isActive }) => (
          <>
            <img
              src="/icon/milkShake.png"
              className={`${isActive ? "hidden" : ""}`}
              alt=""
            />
            <p>میلک شیک</p>
          </>
        )}
      </NavLink>
      <NavLink
        to="/items/cake"
        className={({ isActive }) => `sidebar  ${isActive ? "!bg-black" : ""}`}
      >
        {({ isActive }) => (
          <>
            <img
              src="/icon/cake.png"
              className={`${isActive ? "hidden" : ""}`}
              alt=""
            />
            <p>کیک</p>
          </>
        )}
      </NavLink>
    </div>
  );
}
