import React, { useState } from "react";
import ProductCarousel from "./carousels/ProductCarousel";
import SimialerCarousel from "./carousels/SimialerCarousel";
import ProductInfo from "./ProductInfo";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../catalog/productApiSlice";
import { useGetSimilarQuery } from "../catalog/productApiSlice";
import { useEffect } from "react";
const ProductPage = () => {
  const { id } = useParams();
  const [productState, setProductState] = useState();
  const [similarState,setSimilarState ] = useState();
  const [productInfo,setProductInfo ] = useState();

  const {
    data: loadedProduct,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(id);
  const {
    data: loadedSimilar,
    isLoading: similarLoading,
    isSuccess: similarSuccess,
    isError: similarError,
    error: sError,
  } = useGetSimilarQuery(id);

  useEffect(() => {
    if (isSuccess) {
      const product = loadedProduct.entities[id];
      console.log(product)
      setProductInfo(<ProductInfo product={product}/>)
      setProductState(<ProductCarousel product={product} />);
      console.log(productInfo)

    }
  
    if (similarSuccess) {
      const products = [];
      const { ids } = loadedSimilar;
      ids.forEach((id) => {
        const product = loadedSimilar.entities[id];
       products.push(product)
      });
      setSimilarState(<SimialerCarousel basedId={id} similar={products}/>)

    }
  }, [isSuccess, loadedProduct, similarSuccess, loadedSimilar]);
  function check() {
    console.log(productState.img);
  }
  return (
    <>
      <div className="carousel-wrap">{productState}</div>
    
      <div class="product-stuff">
        {productInfo}
        <div class="product-bottom">
          <img
            class="product-heart"
            src="/assets/imgs/heart.png"
            alt="favorites"
          />
          <button class="add-to-bag">
            <img src="/assets/imgs/whitebag.png" alt="cart" />
            <p>Add to Bag</p>
          </button>
        </div>
      </div>
      <div class="product-info">
        <h1>Similar Items</h1>
      </div> 

      {similarState}
    </>
  );
};

export default ProductPage;
