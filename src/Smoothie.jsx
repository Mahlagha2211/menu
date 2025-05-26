import { useEffect, useState } from "react";
import React from "react";

import Modal from "react-modal";

export default function Smoothie() {
  const [food, setFood] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selecteditem, setSelecteditem] = useState(null);
  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => setFood(data.categories[4].products));
  }, []);
  return (
    <div className="mt-6 px-2 space-y-4">
      <div className="flex items-baseline text-white  gap-x-6">
        <p className="sm:text-[25px] text-[20px]">اسموتی</p>
        <div className="h-[1px] bg-[#727272] grow"></div>
      </div>
      <div className="w-full bg-[#283746] shadow-[0_0_2px_black] grid grid-cols-1 gap-8 lg:grid-cols-3 items:grid-cols-2 p-4 rounded-lg">
        {food.map((item) => (
          <div key={item.id} className="space-y-3 cursor-pointer">
            <div
              onClick={() => {
                setSelecteditem(item);
                setIsOpen(true);
              }}
              className="flex max-[380px]:flex-col gap-x-4 gap-y-2 "
            >
              <img
                src={item.image}
                className=" rounded-lg h-32 max-[500px]:h-24 max-[380px]:h-60 max-[300px]:h-48 object-cover"
                alt=""
              />
              <div className="text-white text-[20px] max-[500px]:text-[17px] grow max-[380px]:text-center  space-y-4">
                <p>{item.name}</p>
                <p>200000 تومان</p>
              </div>
            </div>
            <hr className="text-[#727272]" />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        className="fixed top-1/2 left-1/2 right-auto bottom-auto p-0 transform bg-[#000000] text-white -translate-1/2 max-[600px]:w-[80%] w-[500px] outline-none rounded-lg overflow-hidden shadow-lg shadow-[rgb(105,105,105)]"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            backdropFilter: "blur(5px)",
          },
        }}
      >
        {selecteditem && (
          <div className="flex max-[500px]:flex-col space-x-4">
            <img
              src={selecteditem.image}
              className="h-50 max-[500px]:w-full max-[600px]:h-40 max-[500px]:h-[300px] object-cover"
              alt=""
            />
            <div className="py-3 px-2 space-y-2 text-[18px]">
              <p className="font-bold">{selecteditem.name}</p>
              <p>200000 تومان</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
