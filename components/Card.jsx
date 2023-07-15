import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTeeth, FaGlobe , FaCog, FaSquare, FaSquareFull, FaSquarespace, FaStethoscope, FaHeartbeat, FaStar, FaMedal, FaPager, FaBook } from 'react-icons/fa';
import MyPhoto from '../public/assets/profile-1.jpg'

const Card = () => {
  return (
    <div className="mx-auto px-20">
        <div >
            <div className="p-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3" >
                <div className="p-6 bg-gradient-to-r from-[#770000] to-[#BD0000] rounded-lg">
                    <div className="text-white text-left hover:text-center">
                        <h1 className='pb-2'><FaStar /></h1>
                        <h3 className="text-lg font-bold mb-2">Qualidade</h3>
                  
                            <p className="text-sm leading-6">
                            Toda a fabricação é realizada com equipamentos de ponta
                            </p>
                    </div>
                </div>
                <div className="p-6 bg-gradient-to-r from-[#770000] to-[#BD0000] rounded-lg">
                    <div className="text-white text-left hover:text-center">
                        <h1 className='pb-2'><FaMedal /></h1>
                        <h3 className="text-lg font-bold mb-2">Credibilidade</h3>
                  
                            <p className="text-sm leading-6">
                            Nossos calçados estão nas maiores empresas do Brasil e do Mundo
                            </p>
                    </div>
                </div>
                <div className="p-6 bg-gradient-to-r from-[#770000] to-[#BD0000] rounded-lg">
                    <div className="text-white text-left hover:text-center">
                        <h1 className='pb-2'><FaBook /></h1>
                        <h3 className="text-lg font-bold mb-2">História</h3>
                  
                            <p className="text-sm leading-6">
                            Com mais de 28 anos de história a Prado já é tradição
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Card