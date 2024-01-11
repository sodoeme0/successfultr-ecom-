import React from "react";
import { useEffect } from "react";
import { useGetAllFavoritesQuery } from "./favoriteApiSlice";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import FavProd from "./FavProd";

const Favorite = () => {
  const navigate = useNavigate();

  const { email } = useAuth();
  const [favorites, setFavorites] = useState();
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllFavoritesQuery(email);
  useEffect(() => {
    if (isSuccess) {
      const products = [];
      const { ids } = data;
      ids.forEach((id) => {
        const product = data.entities[id];
        products.push(<FavProd  email={email} favorite={product} />);
      });
      console.log(products);
      setFavorites(products);

      if (isError) {
        console.log(error);
      }
    }
  }, [isSuccess, data, isError, error]);

  return (
    <>
      <div class="fav-top">
        <h1>Favorites</h1>
      </div>

      <div class="products favorite-list">
        <ul className="product-row">{favorites}</ul>
      </div>
    </>
  );
};

export default Favorite;
