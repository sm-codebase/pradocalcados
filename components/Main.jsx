import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import SlImg1 from '../public/assets/sl-img-1.png'
import SlImg2 from '../public/assets/sl-img-2.png'
import SlImg3 from '../public/assets/sl-img-3.png'
import SlImg4 from '../public/assets/sl-img-4.png'
import MainSlider from "./MainSlider";


const Main = () => {
  return (
    <div id="/">
    <div className='w-full h-screen lg:hidden'>
      <div className='pt-10'>
            <Carousel
              autoPlay
              infiniteLoop={true}
            >
              <MainSlider sliderImg={SlImg1} />
              
            </Carousel>
        </div>
      </div>
      <div className='w-full h-screen hidden md:block'>
        <div className='pt-10'>
              <Carousel
                autoPlay
                infiniteLoop={true}
              >
                
                <MainSlider sliderImg={SlImg2} />
                <MainSlider sliderImg={SlImg3} />
                <MainSlider sliderImg={SlImg4} />
              </Carousel>
          </div>
      </div>
    </div>
      
    
  );
};

export default Main