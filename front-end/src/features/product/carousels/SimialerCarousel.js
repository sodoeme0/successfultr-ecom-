import React from 'react'
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/owl.carousel.min.js';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
const SimialerCarousel = ({basedId, similar}) => {
  return (
    <OwlCarousel
    className="owl-carousel similar-items"
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
        items: 2,
      },
      1000: {
        items: 3,
      },
    }}
  >
     {similar.map((product) => {
  if (basedId !== product.id) {
    return (
      <div className="item" key={product.id}>
        <div className="simialer-container">
          <div className="card">
            <span className="h-item-row-1">
              <img src={"/" + product.img} alt={product.name} />
            </span>
            <div className="text-rows">
              <span className="h-item-row-2">
                <h2>{product.name}</h2>

                <div className="heart-home">
                  <img src="/assets/imgs/heart.png" alt="like" />
                </div>
              </span>
              <span className="greyed-out">
                <p>{product.description}</p>
              </span>
              <span>
                <p>${product.price}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
})}

  </OwlCarousel>
  )
}

export default SimialerCarousel
