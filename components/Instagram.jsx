import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import IgImg1 from '../public/assets/social-media/ig-img-1.jpg'
import IgImg2 from '../public/assets/social-media/ig-img-2.jpg'
import IgImg3 from '../public/assets/social-media/ig-img-3.jpg'
import IgImg4 from '../public/assets/social-media/ig-img-4.jpg'
import IgImg5 from '../public/assets/social-media/ig-img-5.jpg'
import IgImg6 from '../public/assets/social-media/ig-img-6.jpg'
import InstagramImg from './InstagramImg'


const instagram = () => {
  return (
    <div id='useprado' className='w-full pt-20'>
      <section className="pt-20 bg-gradient-to-r from-[#770000] to-[#BD0000]">  
      <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <p className='text-white font-thin'>Conte com a gente</p>
                <h2 className="text-white text-4xl font-bold">#useprado</h2>
                <p className="text-white font-thin leading-relaxed m-4 text-blueGray-500">
                Desenvolvemos parceiria com as melhores empresas da região de Campinas
                </p>
              </div>
            </div>
            
          </div>
        <div className="flex justify-center">
          <div className='vh-48 w-96'>
            <Carousel>
              <InstagramImg socialImg={IgImg1} />
              <InstagramImg socialImg={IgImg2} />
              <InstagramImg socialImg={IgImg3} />
              <InstagramImg socialImg={IgImg4} />
              <InstagramImg socialImg={IgImg5} />
              <InstagramImg socialImg={IgImg6} />
            </Carousel>

        </div>
        </div>
     </section>
    </div>
  )
}

export default instagram