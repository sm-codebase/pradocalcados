import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const faleComRepresentante = ({representante, repmessage, repmessage1}) => {
  return (
    <div id='fale-com-rep' className="w-full h-screen text-left bg-auto bg-no-repeat bg-right bg-white sm:bg-[url('/assets/pr-img-2.png')]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-start items-center">
        <div>
            <h2 className='py-0 text-5xl sm:text-7xl font-black text-left text-transparent bg-clip-text bg-gradient-to-r from-[#BD0000] to-[#770000]'>{repmessage}</h2>
            <h2 className='py-0 mt-2 text-5xl sm:text-7xl font-black text-left text-transparent bg-clip-text bg-gradient-to-r from-[#BD0000] to-[#770000]'>{repmessage1}</h2>
            <p className='py-0 mt-5 text-base sm:text-3x2 font-extrabold text-gray-700'>{representante}</p>
            <h3>Fale Agora</h3>

          </div>
        </div>
      </div>
    
  );
};

export default faleComRepresentante;
