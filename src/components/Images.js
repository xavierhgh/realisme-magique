import React from 'react';

function Images({ img, alt }) {
    return (
        <div className="relative">
          <div className="bg-accentuation rounded-br-[10rem]">
            {/* <div className="triangle inline-block absolute top-[100%] -translate-y-[100%] right-0 h-0 w-0 border-b-[8px] border-l-[200px] border-l-transparent triangle"></div> */}
            <img src={img} alt={alt} className="p-2" />
          </div>
        </div>
    );
}

export default Images;