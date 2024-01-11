import React from "react";
import { Link } from "react-router-dom";
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from "../favorite/favoriteApiSlice";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Product = (props) => {
  const [fav, setFav] = useState(props.isFavorite);
  const [heart, setHeart] = useState();

 
  const { name, description, price, img, id } = props.product;
  const path = "/product/" + id;
  const [removeFavorite, isRemovingFavorite] = useRemoveFavoriteMutation();

  const [addFavorite, { isLoading, isError, error }] = useAddFavoriteMutation();
  const { email } = useAuth(); // Assuming you have a hook to get the user's email
  const navigate = useNavigate();

  const handleRemoveFavorite = () => {
    // Call the removeFavorite mutation function with the necessary arguments (email and product ID)
    removeFavorite({ email: email, id: id })
      .unwrap() // unwrap the response data
      .then((response) => {
        console.log("Favorite removed successfully!", response);
      })
      .catch((error) => {
        console.error("Error removing favorite:", error);
      });
      setFav(prev=>!prev)

  };

  const handleAddFavorite = async (e) => {
    const productId = id;
    if (!email) {
     return navigate("/login");
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

    setFav(prev=>!prev)
  };
 useEffect(() => {
    if (fav) {
      setHeart(  <img
        src="assets/imgs/heart-liked.png"
        onClick={handleRemoveFavorite}
        alt="like"
      />);
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
  function check() {
    console.log(img);
  }
  return (
    <>
      <li>
        <div onClick={check} class="product-row-item">
          <span class="item-row-1">
            <Link to={path}>
              <img src={img} />
            </Link>
          </span>
          <span class="product-text">
            <span class="item-row-2">
              <h2>{name}</h2>
             {heart}
            </span>
            <span class="greyed-out">
              <p>{description}</p>
            </span>
            <span>
              <p>${price}</p>
            </span>
          </span>
        </div>
      </li>
    </>
  );
};

export default Product;
