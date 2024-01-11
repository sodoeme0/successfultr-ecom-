import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const productAdapter = createEntityAdapter({});

const initialState = productAdapter.getInitialState();

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/product",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedProducts = responseData.map((product) => {
          product.id = product._id;
          return product;
        });
        return productAdapter.upsertMany(initialState, loadedProducts);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Product", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Product", id })),
          ];
        } else return [{ type: "Product", id: "LIST" }];
      },
    }),

    getProduct: builder.query({
      query: (id) => `/product/product/${id}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const { _id, ...loadedProduct } = responseData;
        loadedProduct.id = _id;
        return productAdapter.upsertOne(initialState, loadedProduct);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Product", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Product", id })),
          ];
        } else return [{ type: "Product", id: "LIST" }];
      },
    }),

    getSimilar: builder.query({
      query: (id) => `/product/similar/${id}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedProducts = responseData.map((product) => {
          product.id = product._id;
          //console.log(product)
          return product;
        });
        return productAdapter.upsertMany(initialState, loadedProducts);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Product", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Product", id })),
          ];
        } else return [{ type: "Product", id: "LIST" }];
      },
    }),

    getNewArrivals: builder.query({
      query: () => "/product/newarrivals",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedProducts = responseData.map((product) => {
          product.id = product._id;
          return product;
        });
        return productAdapter.upsertMany(initialState, loadedProducts);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Product", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Product", id })),
          ];
        } else return [{ type: "Product", id: "LIST" }];
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useGetSimilarQuery,
  useGetNewArrivalsQuery,
} = productApiSlice;

export const selectProductResult =
  productApiSlice.endpoints.getAllProducts.select();

const selectProductData = createSelector(
  selectProductResult,
  (productResult) => productResult.data // normalized state object with ids & entities
);

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  // Pass in a selector that returns the users slice of state
} = productAdapter.getSelectors(
  (state) => selectProductData(state) ?? initialState
);
