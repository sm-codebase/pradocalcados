import Link from 'next/link';
import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';

const Main = ({heading, message, message1}) => {
  return (
    <div id='/' className="w-full h-screen text-left bg-auto bg-no-repeat bg-right bg-white sm:bg-[url('/assets/bground.svg')]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-start items-center">
        <div>
            <p className='py-0 text-base sm:text-xl font-extrabold text-gray-700'>{heading}</p>
            <h2 className='py-0 text-5xl sm:text-7xl font-black text-left text-transparent bg-clip-text bg-gradient-to-r from-[#770000] to-[#BD0000]'>{message}</h2>
            <h2 className='py-0 text-5xl sm:text-7xl font-black text-left text-transparent bg-clip-text bg-gradient-to-r from-[#770000] to-[#BD0000]'>{message1}</h2>
          </div>
        </div>
      </div>
    
  );
};

export default Main;