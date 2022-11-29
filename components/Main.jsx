import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import SlImg1 from '../public/assets/sl-img-1.png'
import SlImg2 from '../public/assets/sl-img-2.png'
import SlImg3 from '../public/assets/sl-img-3.png'
import SlImg4 from '../public/assets/sl-img-4.png'
import MainSlider from "./MainSlider";
import ProductsCarousel from "./ProductsCarousel";
import Card from "./Card";


const Main = () => {
  return (
    <div id="/" className="">
    <div className='md:hidden'>
      <div className='pt-10'>
            <Carousel
              autoPlay
              infiniteLoop={true}
            >
              <MainSlider sliderImg={SlImg1} />  
            </Carousel>  
        </div>
        
      </div>
      <div className='hidden md:block sm:block'>
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
      <div className="mt-6">
                    <Card />
            </div>
                
    </div>
      
    
  );
};

export default Main