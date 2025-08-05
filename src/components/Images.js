import React from 'react';

function Images({ img, alt, className }) {
    return (
        <div className={`relative w-full h-auto sm:h-full ${className}`}>
          <div className="bg-accentuation rounded-br-[10rem] h-auto flex items-center justify-center">
            {/* <div className="triangle inline-block absolute top-[100%] -translate-y-[100%] right-0 h-0 w-0 border-b-[8px] border-l-[200px] border-l-transparent triangle"></div> */}
            <img src={img} alt={alt} className="p-2 w-full h-auto max-w-none object-contain" />
          </div>
        </div>
    );
}

export default Images;