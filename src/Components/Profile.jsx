import React from "react";
import { ProfileData } from "./ProfileData";

function Profile() {
  return (
    <div className="mt-20 bg-[#F5F4FA] pb-8">
      <h4 className="text-2xl font-semibold  pb-3 pt-6 text-center">
        Наша команда
      </h4>
      <div className="w-[89%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {ProfileData.map((data, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <div className="flex flex-col bg-white border border-gray-300 shadow-md rounded-lg">
                <img
                  src={data.image}
                  alt={`Card ${index + 1}`}
                  className="w-full h-full rounded-t-lg"
                />

                <div className="pt-4 pb-4">
                  <h4 className="text-lg font-semibold">{data.name}</h4>
                  <p>{data.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
