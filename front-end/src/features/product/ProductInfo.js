import React from "react";

const ProductInfo = ({product}) => {
  return (
    <div class="product-info">
      <h1>{product.name}</h1>
      <p class="greyed-out">{product.description}</p>
      <h2>${product.price}</h2>

      <div class="product-desc">
        <h1>Product Description</h1>
        <p>
          sonsbd osdisdj sijd js dijsd sdj ijsd sd js d ijsdj sjd jsd js
          djskefnsjkdnfksfnksnfklajnfkj sdfjk sv sakdj kajsd kj sadk ksad
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
