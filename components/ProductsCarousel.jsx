import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MyPhoto from '../public/assets/profile-1.jpg'



const ProductsCarousel = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
                <h2 className='text-center text-base sm:text-xl font-extrabold text-gray-700'> COMPRE AGORA!</h2>
                <div className=''>
                  <ul className='grid grid-cols-4 gap-7 my-4 w-full'>
                    <li>
                    <Link href='/#about'>
                        <Image
                          src={MyPhoto}
                          alt='/'
                          className=''
                          sizes="100vw"
                          style={{
                              width: "100%",
                              height: "auto"
                          }} />
                      </Link>
                    </li>
                    <li>
                    <Link href='/#about'>
                        <Image
                          src={MyPhoto}
                          alt='/'
                          className=''
                          sizes="100vw"
                          style={{
                              width: "100%",
                              height: "auto"
                          }} />
                      </Link>
                    </li>
                    <li>
                    <Link href='/#about'>
                        <Image
                          src={MyPhoto}
                          alt='/'
                          className=''
                          sizes="100vw"
                          style={{
                              width: "100%",
                              height: "auto"
                          }} />
                      </Link>
                    </li>
                    <li><Link href='/#about'>
                        <Image
                          src={MyPhoto}
                          alt='/'
                          className=''
                          sizes="100vw"
                          style={{
                              width: "100%",
                              height: "auto"
                          }} />
                      </Link>
                    </li>
                  </ul>
                </div> 
    </div>
  )
}

export default ProductsCarousel