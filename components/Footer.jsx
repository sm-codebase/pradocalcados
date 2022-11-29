import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import NavLogo from '../public/logo.png'
import Link from "next/link";



function Footer() {
	return <>
        <div className="bg-gradient-to-r from-[#D9D9D9] to-[#7A7375] h-1/2 w-full flex md:flex-row flex-col justify-around items-center pt-5">
            <div className="p-5 ">
                <ul>
                    <a>
                        <Image
                            src={NavLogo}
                            alt='/'
                            width='200'
                            height='auto'
                            className='cursor-pointer'
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </a>
                    <div className="flex justify-center gap-6 pb-5 pt-4">
                        <FaInstagram href='https://www.facebook.com/botinasprado' className="text-5xl text-white cursor-pointer hover:text-red-300" />
                        <FaFacebook href='https://www.facebook.com/botinasprado' className="text-5xl text-white cursor-pointer hover:text-red-300" />
                        <FaWhatsapp href='https://www.facebook.com/botinasprado' className="text-5xl text-white cursor-pointer hover:text-red-300" />
                    </div>
                </ul>
            </div>
            <div className="text-left">
                <div className="p-5">
                    <ul>
                        <p className="text-white font-bold text-2xl pb-4">Serviços</p>
                        <li className="text-white text-md pb-2 font-semibold hover:text-red-400 cursor-pointer">
                            História
                        </li>
                        <li className="text-white text-md pb-2 font-semibold hover:text-red-400 cursor-pointer">
                            Missão
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-white font-bold text-2xl pb-4">Sobre nós</p>
                        <li className="text-white text-md pb-2 font-semibold hover:text-red-400 cursor-pointer">
                            <Link href='/#about'>Quem é a Prado </Link>
                        </li>
                        <li className="text-white text-md pb-2 font-semibold hover:text-red-400 cursor-pointer">
                            <Link href='/gallery'>Como Fazemos?</Link>
                        </li>
                        <li className="text-white text-md pb-2 font-semibold hover:text-red-400 cursor-pointer">
                            <Link href='/#projects'>Como comprar?</Link>
                        </li>
                        <li className="text-white text-md pb-2 font-semibold hover:text-red-400 cursor-pointer">
                            <Link href='/#contact'>Nossa Loja Online</Link>
                        </li>
                        <li className="text-white text-md pb-2 font-semibold hover:text-red-400 cursor-pointer">
                            <Link href='/#contact'>Contatos</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
            <h3 className=" text-gray-800 font-semibold">
                © 2022 Prado Calçados | Todos os direitos reservados | Desenvolvido ❤ pela{" "}
                <span className="hover:text-red-400 font-semibold cursor-pointer">
                    Sousas Midia{" "}
                </span>
            </h3>
        </div>
    </>;
}

export default Footer;