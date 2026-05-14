import React, { useContext } from "react";
import "./App.css";
import { Api } from "./main";
import { useState } from "react";

const  App = () => {
  let { profile } = useContext(Api);

  let [item, setItem] = useState(profile);

  // handle state
  let [newitem, setnewItem] = useState("");
  let [isEdit, setEdit] = useState(false);
  let [currentId, setcurrentId] = useState(null);

  //  handle Input
  let handleInput = (e) => {
    setnewItem(e.target.value);
  };

  //  HAndle Delete
  let handleDelete = (id) => {
    let newItem = item
      .filter((items) => items.id !== id)
      .map((items, index) => {
        return { ...items, id: index + 1 };
      });
    setItem(newItem);
  };

  //  handle checked
  let handleChecked = (id) => {
    let newItem = item.map((items) => {
      return items.id === id ? { ...items, checked: !items.checked } : items;
    });
    setItem(newItem);
  };

  // handle Edit
  let handleEdit = (id) => {
    setEdit(true);
    setcurrentId(id);
    let listItem = item.find((items) => items.id === id);
    setnewItem(listItem.name);
  };

  // Add item
  let handleAddorSaveItem = () => {
    if (isEdit) {
      let newList = item.map((items) => {
        return items.id === currentId ? { ...items, name: newitem } : items;
      });
      setItem(newList);
      setcurrentId(null);
      setEdit(false);
      setnewItem("");
    } else {
      setItem([
        ...item,
        { id: item.length + 1, name: newitem, checked: false },
      ]);
      setnewItem("");
    }
  };

  return (
    <>
      <div className="space-y-10">
        <h1 className="text-red-400 py-3 px-5 text-center text-2xl font-bold shadow shadow-gray-300  bg-white">
          Gokul
        </h1>

        <div className="flex justify-center space-x-2 w-120 mx-auto shadow shadow-gray-500 bg-gray-100 rounded-2xl py-2 px-2">
          <input
            value={newitem}
            onChange={(e) => {
              handleInput(e);
            }}
            className="bg-gray-300 outline-0 rounded-lg w-full px-2"
            type="text"
          />
          <button
            onClick={handleAddorSaveItem}
            className="bg-red-400 px-2 py-1 rounded-2xl shadow shadow-gray-500 text-white font-medium font-mono hover:bg-red-500 hover:opacity-90"
          >
            {isEdit ? "Save" : "Add"}
          </button>
        </div>
        <ul className=" space-y-3 w-fit flex flex-col mx-auto justify-center shadow shadow-gray-500 rounded-2xl py-4 p-2">
          {item.map((items, index) => {
            return (
              <li
                key={items.id}
                className="lg:w-100 hover:-translate-y-1 hover:shadow-[2px_2px_3px_2px] hover:shadow-gray-400 bg-gray-100 transition-all duration-400 text-gray-700 hover:bg-gray-200 px-2 py-1 w-50 flex justify-between rounded-2xl items-center text-md capitalize font-medium"
              >
                {items.name}

                <input
                  type="checkbox"
                  checked={items.checked}
                  onChange={() => {
                    handleChecked(items.id);
                  }}
                  name=""
                  id=""
                />
                <div className="space-x-3">
                  <button
                    type="button"
                    onClick={() => handleEdit(items.id)}
                    className="lg:px-4 lg:py-2 bg-pink-400 text-xs text-white hover:bg-pink-500 px-2 py-1 rounded-2xl"
                  >
                    Edit
                  </button>{" "}
                  <button
                    key={items.id}
                    onClick={() => handleDelete(items.id)}
                    className="lg:p-2   bg-red-400 text-xs text-white hover:bg-red-500 px-2 py-1 rounded-2xl"
                  >
                    delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
