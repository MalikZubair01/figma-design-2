import React from "react";
import { DescriptionData } from "./DescriptionData";
function Description() {
  return (
    <div className="flex justify-center items-center bg-[#FFFFFF]">
      <div className="w-[89%] mt-10 bor">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 ">
          {DescriptionData.map((data, index) => (
            <div key={index} className="p-4 flex flex-col text-center  ">
              <h4 className="text-xl font-semibold mb-2">{data.title}</h4>
              <p>{data.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
