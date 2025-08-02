import React from "react";

function Oeuvre({ img, alt, title, by }) {
  return (
    <div className="relative">
      <div className="bg-accentuation rounded-br-[10rem]">
        {/* <div className="triangle inline-block absolute top-[100%] -translate-y-[100%] right-0 h-0 w-0 border-b-[8px] border-l-[200px] border-l-transparent triangle"></div> */}
        <div className="p-2">
          <img src={img} alt={alt} className=" pb-0" />
          <div className="mt-0 bg-noirclair">
            <h3 className="mb-2">{title}</h3>
            <h4>{by}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oeuvre;
