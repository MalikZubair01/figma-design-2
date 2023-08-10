import React from "react";
import { CardData } from "./CardData";

function Card() {
  return (
    <div className="mt-20 mx-auto bg-[#FFFFFF] w-[89%]">
      <h4 className="items-center font-semibold text-2xl pb-3 pt-6">
        Чем мы занимаемся
      </h4>

      <div className="flex flex-wrap justify-center items-center">
        {CardData.map((data, index) => (
          <div key={index} className=" p-4 mb-8 sm:w-1/2 md:w-1/3 lg:w-1/3">
            <div className="relative w-1170 h-386 left-215 top-969">
              <img
                src={data.image}
                alt={`Card ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
