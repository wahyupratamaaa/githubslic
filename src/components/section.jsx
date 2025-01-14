// import React from "react";
import { FaRegStar } from "react-icons/fa";
import data from "../api/dummy.json";

function Section() {
  return (
    <div className="w-screen h-screen flex justify-center pt-3 ">
      <div className="text-white p-8 rounded-lg shadow-lg max-w-7xl w-full text-center ">
        <div className="flex gap-6">
          <div className="flex flex-col items-start justify-start gap-3">
            <img
              src="https://avatars.githubusercontent.com/u/111998022?v=4"
              alt="github"
              className="w-90 h-auto rounded-full border-2 border-gray-600"
            />
            <div className="flex flex-col items-start">
              <span className="text-2xl font-semibold">Wahyu Pratama</span>
              <span className="text-gray-500 text-xl">
                wahyupratamaaa · she/her
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between w-full mb-2">
              <span>Popular repositories</span>
              <span className="text-xs text-blue-400 cursor-pointer">
                Customize your pins
              </span>
            </div>
            <div className="flex gap-3">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="p-2 rounded-md border border-gray-500 w-1/2"
                >
                  <div className="flex flex-col items-start justify-between h-full px-3 py-3">
                    <div className="flex justify-between items-center w-full gap-2">
                      <span className="text-sm text-blue-400 font-semibold">
                        {item.username}
                      </span>
                      <p className="text-xs px-2 text-gray-400 border border-gray-500 rounded-lg">
                        {item.access}
                      </p>
                    </div>
                    <p className="text-xs text-left text-gray-500 pt-2">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-1 mt-4">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.language.color }}
                      ></span>
                      <p className="text-xs text-gray-400">
                        {item.language.name}{" "}
                      </p>
                      <div className="hover:text-blue-500 cursor-pointer flex gap-1 text-gray-400 ">
                        <FaRegStar className="ml-3 " />
                        <p className="text-xs ">{item.starCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
