import { useEffect, useState } from "react";

export default function HotDrink() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => setFood(data.categories[7].products));
  }, []);
  return (
    <div className="mt-6 px-2 space-y-4">
      <div className="flex items-baseline text-white  gap-x-6">
        <p className="sm:text-[25px] text-[20px]">نوشیدنی گرم</p>
        <div className="h-[1px] bg-[#727272] grow"></div>
      </div>
      <div className="w-full bg-[#283746] shadow-[0_0_2px_black] grid grid-cols-1 gap-8 lg:grid-cols-3 items:grid-cols-2 p-4 rounded-lg">
        {food.map((item) => (
          <div  key={item.id} className="space-y-3 cursor-pointer">
            <div className="flex max-[380px]:flex-col gap-x-4 gap-y-2 ">
              <img src={item.image} className=" rounded-lg h-32 max-[500px]:h-24 max-[380px]:h-60 max-[300px]:h-48 object-cover" alt="" />
              <div className="text-white text-[20px] max-[500px]:text-[17px] grow max-[380px]:text-center  space-y-4">
                <p>{item.name}</p>
                <p>200000 تومان</p>
              </div>
            </div>
            <hr className="text-[#727272]"/>
          </div>
        ))}
      </div>
    </div>
  );
}
