import Link from 'next/link';
import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';

const Main = ({heading, message, message1}) => {
  return (
    <div id='/' className="w-full h-screen text-left bg-auto bg-no-repeat bg-right bg-white bg-50% bg-center bg-[url('/assets/bground.png')] ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-start items-center">
        <div>
            <p className='py-0 text-base sm:text-xl font-extrabold text-gray-300 transition-opacity ease-in duration-700 opacity-90 hover:opacity-100'>{heading}</p>
            <h2 className='py-0 text-5xl sm:text-7xl font-black text-left text-white transition-opacity ease-in duration-700 opacity-90 hover:opacity-100' >{message}</h2>
            <h2 className='py-0 text-5xl sm:text-7xl font-black text-left  text-white transition-opacity ease-in duration-700 opacity-90 hover:opacity-100'>{message1}</h2>
        </div>
      </div>
    </div>
    
  );
};

export default Main;