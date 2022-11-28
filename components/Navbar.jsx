import Image from "next/image";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebook, FaInstagram , FaWhatsapp } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/logo.svg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
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
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
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
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-gradient-to-l from-[#D9D9D9] to-[#7A7375]'>
        <Link legacyBehavior href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='170'
              height='70'
              className='cursor-pointer'
              style={{
                maxWidth: "100%",
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
                >
                  <div className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300  bg-white text-[#7A7375]'>
                    <FaInstagram />
                  </div>
                </a>
                <Link legacyBehavior href='https://www.whatsapp.com/'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-300  bg-white text-[#7A7375]'
                  >
                    <FaWhatsapp />
                  </div>
                </Link>
              </div>
        </div>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b text-white'>
              <Link href='/#about'>QUEM É A PRADO?</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b text-white'>
              <Link href='/#howwedo'>COMO FAZEMOS?</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b text-white'>
              <Link href='/gallery'>COMO COMPRAR?</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b text-white'>
              <Link href='/#projects'>NOSSA LOJA ONLINE</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b text-white'>
              <Link legacyBehavior href='/contact'>CONTATOS </Link>
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
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-white/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-r from-[#D9D9D9] to-[#7A7375] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link legacyBehavior href='/'>
                <a>
                  <Image
                    src={NavLogo}
                    width='170'
                    height='70'
                    alt='/'
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg p-3 cursor-pointer text-white'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-[#A92629]-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 text-white'>
                Qualidade e tradição
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-white'>
                  QUEM É A PRADO?
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-white'>
                  COMO FAZEMOS?
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-white'>
                  COMO COMPRAR?
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-white'>
                  NOSSA LOJA ONLINE
                </li>
              </Link>
              <Link legacyBehavior href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-white'>
                  CONTATOS
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-white'>
                COMPRE AGORA
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%] text-white'>
              <a
                  href='https://www.facebook.com/atmartinscaldeiraria'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white text-[#001E47]'>
                    <FaFacebook />
                  </div>
                </a>
                <a
                  href='https://www.instagram.com/atmartinscaldeiraria/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300  bg-white text-[#001E47]'>
                    <FaInstagram />
                  </div>
                </a>
                <Link legacyBehavior href='https://www.whatsapp.com/'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg  p-3 cursor-pointer hover:scale-105 ease-in duration-300  bg-white text-[#001E47]'
                  >
                    <FaWhatsapp />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
