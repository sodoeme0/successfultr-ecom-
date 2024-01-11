import React, { useState, useEffect } from "react";
import CategoryFilter from "./filters/CategoryFilter";
import BrandFilter from "./filters/BrandFilter";
import PriceFilter from "./filters/PriceFilter";
import { useGetAllProductsQuery } from "./productApiSlice";
import Product from "./Product";
import { useSelector } from "react-redux";
import { selectAllProducts } from "./productApiSlice";
import useAuth from "../../hooks/useAuth";
import { useGetAllFavoritesQuery } from "../favorite/favoriteApiSlice";
const Catalog = () => {
  //console.log(useAuth());

  const [checkPrompted, setCheckPrompted] = useState(false);

  const [filters, setFilters] = useState({
    brand: {},
    category: {},
    price: {},
  });
  const [expandedFilters, setExpandedFilters] = useState({
    brand: false,
    category: false,
    price: false,
  });
  const [productList, setProductList] = useState();

  const filterComponents = new Map();
  filterComponents.set(
    "category",
    <CategoryFilter
      checked={filters["category"]}
      onChange={handleFilterChange}
    />
  );
  filterComponents.set(
    "brand",
    <BrandFilter checked={filters["brand"]} onChange={handleFilterChange} />
  );
  filterComponents.set("price", <PriceFilter onChange={handleFilterChange} />);
  const allProducts = useSelector(selectAllProducts);
  const { email } = useAuth();
  const { data: favoriteData, isLoading: isFavoriteLoading } =
    useGetAllFavoritesQuery(email);
  const {
    data: loadedProducts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  useEffect(() => {
    if (isSuccess && favoriteData) {
      const products = [];
      const { entities: favoriteEntities } = favoriteData;
      const { ids } = loadedProducts;
      const favoriteEntitiesArray = favoriteData
        ? Object.values(favoriteData.entities)
        : [];

      console.log(favoriteEntitiesArray);

      ids.forEach((_id) => {
        const product = loadedProducts.entities[_id];
        const isFavorite = favoriteEntitiesArray.some((obj) => {
          return obj.product._id == _id;
        });
        products.push(
          <Product key={_id} product={product} isFavorite={isFavorite} />
        );
      });

      setProductList(products);
    } else if (isSuccess) {
      const products = [];
      const { ids } = loadedProducts;

      ids.forEach((id) => {
        const product = loadedProducts.entities[id];
        products.push(<Product product={product} />);
      });
      console.log(products);

      setProductList(products);
    }
  }, [isSuccess, loadedProducts, favoriteData]);

  function handleFilterChange(id, checked, filterType) {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      updatedFilters[filterType][id] = checked;
      return updatedFilters;
    });

    setCheckPrompted(true);
    console.log(checkPrompted);
  }
  function ExpandFilter(event) {
    event.preventDefault();
    const id = event.target.id;
    setExpandedFilters((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  }
  useEffect(() => {
    if (checkPrompted) {
      filterProducts();
      setCheckPrompted(false); // Reset the flag after executing the effect
    }
  }, [filters, checkPrompted]); // Add `checkPrompted` as a dependency to the effect

  function filterProducts() {
    const brandFilters = [];
    const categoryFilters = [];
    const randomFilters = [];
    Object.keys(filters).forEach((key) => {
      switch (key) {
        case "brand":
          Object.keys(filters[key]).forEach((val) => {
            if (filters[key][val]) {
              brandFilters.push(val);
            }
          });
          break;

        case "category":
          console.log(filters[key]);
          Object.keys(filters[key]).forEach((val) => {
            if (filters[key][val]) {
              categoryFilters.push(val);
            }
          });
          break;

        case "random":
          Object.keys(filters[key]).forEach((val) => {
            if (filters[key][val]) {
              randomFilters.push(val);
            }
          });
          break;
      }
    });
    console.log(allProducts);
    let filteredProducts = allProducts.filter((product) => {
      const hasBrand =
        brandFilters.length === 0 || brandFilters.includes(product.brand);
      const hasCategory =
        categoryFilters.length === 0 ||
        categoryFilters.includes(product.category);
      const hasRandom =
        randomFilters.length === 0 ||
        randomFilters.some((tag) => product.tags.includes(tag.toLowerCase()));
      // console.log( hasBrand ,"&&", hasCategory ,"&&", hasRandom)

      return hasBrand && hasCategory && hasRandom;
    });
    const products = filteredProducts.map((product) => {
      return <Product product={product} />;
    });

    setProductList(products);
    //after loop ends load added products, iff array empty load all products
    // filteredProducts.length === 0 ? loadProducts(data) : loadProducts(filteredProducts);
  }

  return (
    <>
      <main>
        <div class="hero-catalog">
          <img src="assets/imgs/sale.png" alt="" />
          <div class="hero-catalog-title">
            <h1>Up TO 70% OFF</h1>
            <h2>Flash Sale</h2>
          </div>
        </div>

        <div class="main-catalog">
          <div class="filter-box">
            <div class="filter-box-row">
              <span>Category</span>
              <img
                src="assets/imgs/plus.png"
                alt="expand button"
                class="filter-toggle"
                id="category"
                onClick={ExpandFilter}
              />
            </div>

            <ul class="options" id="category-options">
              {expandedFilters["category"] && filterComponents.get("category")}
            </ul>

            <div class="filter-box-row">
              <span>Brand</span>
              <img
                src="assets/imgs/plus.png"
                alt="expand button"
                class="filter-toggle"
                id="brand"
                onClick={ExpandFilter}
              />
            </div>

            <ul class="options" id="brand-options">
              {expandedFilters["brand"] && filterComponents.get("brand")}
            </ul>

            <div class="filter-box-row">
              <span>Price Range</span>
              <img
                src="assets/imgs/plus.png"
                alt="expand button"
                class="filter-toggle"
                id="price"
                onClick={ExpandFilter}
              />
            </div>
            <ul class="options" id="price-options">
              {expandedFilters["price"] && filterComponents.get("price")}
            </ul>
          </div>

          <div class="products">
            <ul class="product-row">{productList}</ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Catalog;
