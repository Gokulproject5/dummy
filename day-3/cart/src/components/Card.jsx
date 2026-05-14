import React, { useContext, useState } from "react";
import { productApi } from "../App";

const Card = () => {
  const { products } = useContext(productApi);

  const [items, setItem] = useState(
    products.map((item) => ({ ...item, quantity: 1 })),
  );

  const handleDelete = (id) => {
    let newItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });

    setItem(newItems);
  };

  return (
    <>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="flex gap-5 items-center w-105 pl-2  bg-gray-300 rounded-2xl shadow shadow-gray-600"
          >
            <div className="py-4">
              <img
                src={item.url}
                className="w-50 rounded-2xl"
                alt="Realme-img"
              />
            </div>

            <div className="text-sm space-y-3 text-gray-800 bg-gray-200 px-5 py-5 rounded-r-2xl">
              <h1 className="text-xl text-blue-500">{item.productName}</h1>

              <div className="text-[10px] px-2 space-y-0.5">
                <div className="text-wrap w-42 text-[13px]">{item.des}</div>

                <p className="text-lg text-slate-100 px-4 bg-gray-500 text-center rounded">
                  ₹ {item.price}
                </p>

                <div className=" px-5 ">
                  <div className="px-2 py-1 flex justify-between w-30 items-center">
                    {/* Decrease */}
                    <button
                      onClick={() => {
                        setItem(
                          items.map((i) =>
                            i.id === item.id
                              ? {
                                  ...i,
                                  quantity: Math.max(1, i.quantity - 1),
                                }
                              : i,
                          ),
                        );
                      }}
                      className="bg-red-400 shadow-md shadow-gray-400 font-bold text-white rounded-full w-5 h-5"
                    >
                      -
                    </button>

                    <span className="font-bold text-[14px]">
                      {item.quantity}
                    </span>

                    {/* Increase */}
                    <button
                      onClick={() => {
                        setItem(
                          items.map((i) =>
                            i.id === item.id
                              ? {
                                  ...i,
                                  quantity: Math.min(5, i.quantity + 1),
                                }
                              : i,
                          ),
                        );
                      }}
                      className="bg-green-400 font-bold shadow-md shadow-gray-400 text-white rounded-full w-5 h-5"
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <h1 className="text-lg font-semibold ">
                      Total : ₹ {item.price * item.quantity}
                    </h1>
                  </div>
                </div>

                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className="bg-red-400 text-white px-2 py-1 w-full rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
