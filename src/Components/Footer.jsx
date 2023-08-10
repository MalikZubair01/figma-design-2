import React from "react";
import footer from "../Assets/Header/footer.jpg";

function Footer() {
  return (
    <div className="flex w-full h-[252px] bg-gradient-to-b from-[#2F303A] to-[#26282E]">
      <div className="flex justify-start items-start p-8 flex-col">
        <div className="relative w-1/4 bg-[#2F303A]">
          <img
            src={footer}
            alt=""
            className="w-full h-full justify-start items-start ml-8"
          />
        </div>
        <div className="text-white ml-8 mt-4 justify-start">
          <h2 className="text-xl font-semibold mb-2 text-start md:text-2xl lg:text-3xl">
            г. Киев, пр-т Леси Украинки, 26
          </h2>
          <p className="text-sm mb-2 text-start md:text-base lg:text-lg">
            г. Киев, пр-т Леси Украинки, 26
          </p>
          <p className="text-sm text-start md:text-base lg:text-lg">
            +38 099 111 11 11
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
