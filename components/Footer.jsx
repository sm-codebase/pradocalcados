import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import NavLogo from '../public/logo.svg'
import Link from "next/link";



function Footer() {
	return (
		<>
			<div className="bg-gradient-to-r from-[#770000] to-[#BD0000] h-1/2 w-full sm:mt-52 flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<a>
            				<Image
              					src={NavLogo}
              					alt='/'
              					width='170'
              					height='70'
              					className='cursor-pointer'
            				/>
          				</a>
						<div className="flex justify-center gap-6 pb-5">
							<FaInstagram className="text-2xl text-white cursor-pointer hover:text-gray-300" />
							<FaFacebook className="text-2xl text-white cursor-pointer hover:text-gray-300" />
							<FaWhatsapp className="text-2xl text-white cursor-pointer hover:text-gray-300" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Serviços</p>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							História
						</li>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Missão
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Sobre nós</p>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href='/#about'>Quem é a Prado </Link>
						</li>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href='/gallery'>Como Fazemos?</Link>
						</li>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href='/#projects'>Como comprar?</Link>
						</li>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href='/#contact'>Nossa Loja Online</Link>
						</li>
						<li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							<Link href='/#contact'>Contatos</Link>
						</li>
					</ul>
				</div>
				
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h3 className=" text-gray-800 font-semibold">
					© 2022 Prado Calçados | Todos os direitos reservados | Desenvolvido ❤ pela{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						Sousas Midia{" "}
					</span>
				</h3>
			</div>
		</>
	);
}

export default Footer;