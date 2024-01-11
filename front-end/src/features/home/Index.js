import React, { useState } from "react";
import { useEffect } from "react";
import { useGetNewArrivalsQuery } from "../catalog/productApiSlice";
import NewArrivals from "./NewArrivals";
import Brands from "./Brands";
import useAuth from "../../hooks/useAuth";

const Index = () => {
  //console.log(useAuth())
  const [newArrivals, setNewArrivals] = useState();
  const { data, isLoading, isSuccess, isError, error } =
    useGetNewArrivalsQuery();
  useEffect(() => {
    if (isSuccess) {
      
      const products = [];
      const { ids } = data;
      ids.forEach((id) => {
        const product = data.entities[id];
        products.push(product);
        //console.log(product);
      });
      setNewArrivals(<NewArrivals newArrivals={products} />);
    }
  }, [isSuccess, data]);
  
  return (
    <>
      <main>
        <div class="main-content">
          <div class="hero">
            <div class="hero-content">
              <h1>In need of a repair?</h1>
              <p>
                From cracked t.v. screens to water damaged mobile devices, we
                handle it all!
              </p>
              <button class="hero-content-button">
                <img src="assets/imgs/arrow.png" alt="arrow" />
                <p>See more</p>
              </button>
            </div>
          </div>
        </div>

        <h1 class="headings-Home">New Arrivals</h1>
        <div class="carousel-wrap">{newArrivals}</div>
      </main>
      <div class="categories-container">
        <h1 class="headings-Home cat">Categories</h1>
        <div class="categories">
          <div class="row">
            <img src="assets/imgs/pin-tv.jpg" alt="beats" />
            <img src="assets/imgs/laptop.jpg" alt="beats" />
          </div>

          <div class="row">
            <img src="assets/imgs/s23.jpg" alt="beats" />
            <img src="assets/imgs/headphones.jpg" alt="beats" />
          </div>
        </div>
      </div>

      
      {<Brands/>}
    </>
  );
};

export default Index;
