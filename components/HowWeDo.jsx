import React from 'react';
import { FaTeeth, FaGlobe , FaCog, FaSquare, FaSquareFull, FaSquarespace, FaStethoscope, FaHeartbeat, FaStar, FaMedal, FaPager, FaBook } from 'react-icons/fa';
import Image from 'next/image';
import ProdutoImg from '../public/assets/pr-img-1.png'


const HowWeDo = () => {
  return (
    <div id='howwedo' className='max-w-[1240px] py-10 mx-auto'>
      <h2 className='text-center text-base sm:text-xl font-extrabold text-gray-700'>NOSSAS BASES PARA CRESCER</h2>
      <h1 className='text-4xl font-black text-center p-4'>Quem é a Prado?</h1>
      <div className='relative flex justify-center p-4'></div>
      
         <div className="flex flex-wrap items-center pt-0">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full px-0">
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="bg-gradient-to-r from-[#770000] to-[#BD0000] shadow-lg rounded-lg p-2">
                    <h1 className='text-white'><FaStar /></h1>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Qualidade
                      </p>
                    </div>
                  </a>
                  <a>
                    <div className="bg-gradient-to-r from-[#770000] to-[#BD0000] shadow-lg rounded-lg p-2 mt-4">
                    <h1 className='text-white'><FaMedal /></h1>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Credibilidade
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-[#770000] to-[#BD0000] shadow-lg rounded-lg p-2 mt-4">
                      <h1 className='text-white'><FaBook /></h1>
                      <p className="text-lg text-white mt-4 font-semibold">
                       História
                      </p>
                    </div>
                  </a>
                </div>
                
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto">
                <Image
              	    src={ProdutoImg}
              		alt='/'
              		width='1239'
              		height='960'
              		className='cursor-pointer'
            	/>
            </div>
          </div>
          </div>
  );
};

export default HowWeDo;
