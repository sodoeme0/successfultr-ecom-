import React from "react";
import { useState } from "react";
import {
    useAddFavoriteMutation,
    useRemoveFavoriteMutation,
  } from "../favorite/favoriteApiSlice";
  import { useNavigate } from "react-router-dom";
  import { useEffect } from "react";

const FavProd = ({ favorite, email }) => {
    const navigate = useNavigate()
  const [heart, setHeart] = useState();
  const [fav, setFav] = useState(true);
  const [removeFavorite, isRemovingFavorite] = useRemoveFavoriteMutation();

  const [addFavorite, { isLoading: addLoading, isError: addError, aError }] =
    useAddFavoriteMutation();
  const handleRemoveFavorite = (e) => {
   
    const id = favorite.product._id
    // Call the removeFavorite mutation function with the necessary arguments (email and product ID)
    removeFavorite({ email: email, id: id })
      .unwrap() // unwrap the response data
      .then((response) => {
        console.log("Favorite removed successfully!", response);
      })
      .catch((error) => {
        console.error("Error removing favorite:", error);
      });
    setFav((prev) => !prev);
  };

  const handleAddFavorite = async (e) => {
    const productId = favorite.product._id
    if (!email) {
      navigate("/login");
    }
    try {
      // Call the addFavorite mutation with the email and productId
      await addFavorite({ email, id: productId });

      // Handle successful add to favorites
      console.log("Product added to favorites successfully!");
    } catch (error) {
      // Handle error, if any
      console.error("Error adding product to favorites:", error);
    }

    setFav((prev) => !prev);
  };
  useEffect(() => {
    if (fav) {
      setHeart(
        <img
          src="assets/imgs/heart-liked.png"
          onClick={handleRemoveFavorite}
          alt="like"
        />
      );
    } else {
      setHeart(
        <img
          src="assets/imgs/heart.png"
          onClick={handleAddFavorite}
          alt="like"
        />
      );
    }
  }, [fav]);
  return (
    <>
      <li key={favorite.id}>
        <div className="product-row-item">
          <span className="item-row-1">
            <img src={favorite.product.img} alt={favorite.product.name} />
          </span>
          <span className="product-text">
            <span className="item-row-2">
              <h2>{favorite.product.name}</h2>
              {heart}
            </span>
            <span className="greyed-out">
              <p>{favorite.product.description}</p>
            </span>
            <span>
              <p>{favorite.product.price}</p>
            </span>
          </span>
        </div>
      </li>
    </>
  );
};

export default FavProd;
