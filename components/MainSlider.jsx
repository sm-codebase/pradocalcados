import Image from "next/image";
import React from 'react'
import Card from "./Card";
import { FaInstagram, FaShoePrints } from 'react-icons/fa'

const MainSlider= ({sliderImg}) => {
    return (
        <div className="mt-20 carousel-slide md:pt-5">

            <div>
                <Image
                    src={sliderImg}
                    alt=""
            height={550}
            width={1000}
            style={{ borderRadius: "15px" }} // Adicione o estilo de borda arredondada
            />
            {/* Overlay */}
                <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
                    <p className='text-gray-300 hidden group-hover:block'><FaShoePrints  size={30}/></p>
                </div>
            </div>
            
        </div>
    );
}

export default MainSlider