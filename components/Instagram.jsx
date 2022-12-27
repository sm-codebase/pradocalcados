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
    <div id='social' className='w-full h-screen bg-gradient-to-r from-[#770000] to-[#BD0000]'>
        
      <div className="container mx-auto">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full lg:w-6/12">
                <p className='text-white font-thin mt-10'>conte com a gente</p>
                <h2 className="text-white text-4xl font-bold">#useprado</h2>
                <p className="text-white font-thin leading-relaxed m-4 text-blueGray-500">
                Desenvolvemos parceiria com as melhores empresas da região de Campinas
                </p>
              </div>
            </div>
            
          </div>
        <div className="flex justify-center mt-10">
          <div className='h-60 w-96 lg:[h-70]'>
            <Carousel
            autoPlay
            infiniteLoop={true}
            >
              <InstagramImg socialImg={IgImg1} />
              <InstagramImg socialImg={IgImg2} />
              <InstagramImg socialImg={IgImg3} />
              <InstagramImg socialImg={IgImg4} />
              <InstagramImg socialImg={IgImg5} />
              <InstagramImg socialImg={IgImg6} />
            </Carousel>

          </div>
        </div>
     
    </div>
  )
}

export default instagram