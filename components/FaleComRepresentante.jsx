import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const faleComRepresentante = ({representante, repmessage, repmessage1}) => {
  return (
    <div id='fale-com-representante' className="w-full h-screen bg-white">
      <div className="max-w-[1240px] w-full h-full mx-auto p-5 lg:flex items-stretch justify-evenly">
        <div className='mt-20 lg:self-center'>
            <h2 className='py-0 text-5xl sm:text-7xl font-black flex  text-transparent bg-clip-text bg-gradient-to-r from-[#BD0000] to-[#770000]'>{repmessage}</h2>
            <h2 className='py-0 mt-2 text-5xl sm:text-7xl font-black text-left text-transparent bg-clip-text bg-gradient-to-r from-[#BD0000] to-[#770000]'>{repmessage1}</h2>
            <p className='py-0 mt-5 text-base sm:text-3x2 font-extrabold text-gray-700'>{representante}</p>
            <div className='mt-5'>
              <button className='p-3'>
                <Link href='https://wa.link/lmeph0'>Fale Agora</Link>
              </button>
            </div>
          </div>
          <div className='mt-10 flex lg:justify-end self-center'>
            <Image src='/assets/pr-img-2.png' alt='Representante' width='700' height='400'/>
          </div>
        </div>
      </div>
    
  );
};

export default faleComRepresentante;
