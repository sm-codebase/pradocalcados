import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import SlImgSm1 from "../public/assets/sl-img-sm-1.png";
import SlImgSm2 from "../public/assets/sl-img-sm-2.png";
import SlImgSm3 from "../public/assets/sl-img-sm-3.png";
import SlImg1 from "../public/assets/sl-img-1.png";
import SlImg2 from "../public/assets/sl-img-2.png";
import SlImg3 from "../public/assets/sl-img-3.png";
import SlImg4 from "../public/assets/sl-img-4.png";
import MainSlider from "./MainSlider";
import ProductsCarousel from "./ProductsCarousel";
import Card from "./Card";

const Main = () => {
  return (
    <div id="/" className="pt-10">
      <div className="md:hidden">
        <div className="">
          <Carousel
            autoPlay={true}
            showArrows={false}
            infiniteLoop={true}
            interval={5000}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            swipeable={false}
          >
            <MainSlider sliderImg={SlImgSm1} />
            <MainSlider sliderImg={SlImgSm2} />
            <MainSlider sliderImg={SlImgSm3} />
          </Carousel>
        </div>
      </div>
      <div className="hidden md:block sm:block">
        <div className="">
          <Carousel
            autoPlay={true}
            showArrows={false}
            infiniteLoop={true}
            interval={5000}
            stopOnHover={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            swipeable={false}
          >
            <MainSlider sliderImg={SlImg1} />
            <MainSlider sliderImg={SlImg2} />
            <MainSlider sliderImg={SlImg3} />
            <MainSlider sliderImg={SlImg4} />
          </Carousel>
        </div>
      </div>
      <div className="mb-10">
        <Card />
      </div>
    </div>
  );
};

export default Main;
