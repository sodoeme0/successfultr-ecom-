import React from 'react'
import OwlCarousel from "react-owl-carousel";
import $ from 'jquery';
import 'owl.carousel/dist/owl.carousel.min.js';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
const ProductCarousel = ({product}) => {
 
  return (
   
    <OwlCarousel
          className="owl-carousel product-carousel"
          loop
          margin={10}
          nav
          navText={[
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>",
          ]}
          autoplay={false}
          autoplayHoverPause
          responsive={{
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          }}
        >
          <div className="item">
            <span className="h-item-row-1">
              <div className="product-img">
                <img
                  src={"/"+product.img}
                  alt="Lenevo Laptop"
                />
              </div>
            </span>
          </div>
         
        </OwlCarousel>
   
  )
}

export default ProductCarousel
