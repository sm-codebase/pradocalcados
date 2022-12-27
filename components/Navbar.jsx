import Image from "next/image";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebook, FaInstagram , FaWhatsapp } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/logo.png'
import { Button } from "react-bootstrap";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('red')
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#FFFFFF');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor('#ffffff');
            setTextColor('#000000');
        } else {
            setColor('transparent');
            setTextColor('#000000');
        }
    };
    window.addEventListener('scroll', changeColor);
}, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-gradient-to-b from-[#D9D9D9] to-[#7A7375]'>
        <Link legacyBehavior href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='170'
              height='70'
              className='cursor-pointer'
              style={{
                maxWidth: "70%",
                height: "auto"
              }} />
          </a>
        </Link >
        <div>
        <div className='flex items-center justify-between space-x-4 my-5 w-full sm:w-[80%]'>
                <a
                  href='https://www.facebook.com/botinasprado'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300  bg-white text-[#7A7375]'>
                    <FaFacebook />
                  </div>
                </a>
                <a
                  href='https://www.instagram.com/botinasprado/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300  bg-white text-[#7A7375]'>
                    <FaInstagram />
                  </div>
                </a>
                <a  
                  href='https://wa.link/lmeph0'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300  bg-white text-[#7A7375]'>
                            <FaWhatsapp />
                  </div>
                </a>
              </div>
        </div>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b text-white'>
            <button className='p-3'>
                <Link href='https://wa.link/lmeph0'>Fale Agora</Link>
              </button>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {/*Mobile button */}
      <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
                </div>
      {/*Mobile menu */}
      <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 botton-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 botton-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'}>
                    <ul>
                        <li onClick={handleNav}  className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#nossa-historia'>Nossa Hitória</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/#fale-com-representante'>Fale Conosco</Link>   
                        </li>
                    </ul>
                </div>
    </div>
  );
};

export default Navbar;
