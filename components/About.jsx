import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='py-10 uppercase text-xl tracking-widest text-[#001E47]'>
              Nossa História
          </p>
          <h2 className='py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h2>
          <p className='py-2 text-gray-600'>
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
          </p>
          <p className='py-2 text-gray-600'>
          et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
          </p>
          <p className='py-2 text-gray-600'>
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim 
          ad minima veniam, quis nostrum exercitationem
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Confira alguns de nossos projetos.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image 
            src={AboutImg}
            width='500px'
            height='750px' 
            className='rounded-xl' 
            alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
