import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const favoriteAdapter = createEntityAdapter({});

const initialState = favoriteAdapter.getInitialState();

export const favoriteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFavorites: builder.query({
        query: (email) => ({
            url: `/favorites/${(email)}`, // Append email as a query parameter
            method: "GET",
        }),
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
        keepUnusedDataFor: 5,
        transformResponse: (responseData) => {
          const loadedProducts = responseData.map((product) => {
            product.id = product._id;
            return product;
          });
          return favoriteAdapter.upsertMany(initialState, loadedProducts);
        },
        providesTags: (result, error, arg) => {
          if (result?.ids) {
            return [
              { type: "Fav", id: "LIST" },
              ...result.ids.map((id) => ({ type: "Fav", id })),
            ];
          } else return [{ type: "Fav", id: "LIST" }];
        },
      }),
      
      addFavorite: builder.mutation({
        query: ({ email, id }) => ({
          url: `/favorites`,
          method: 'POST',
          body: { email, id },
        }),
        invalidatesTags: [
          { type: 'Fav', id: "LIST" }
        ]
      }),
      
    removeFavorite: builder.mutation({
        query: ( {email, id} ) => ({
            url: `/favorites`,
            method: 'DELETE',
            body: { email, id }

        }),
        invalidatesTags: (result, error, arg) => [
            { type: 'Fav', id: arg.id }
        ]
    }),
  }),
});

export const {
  useGetAllFavoritesQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,

} = favoriteApiSlice;

export const selectFavoriteResult =
  favoriteApiSlice.endpoints.getAllFavorites.select();

const selectFavoriteData = createSelector(
  selectFavoriteResult,
  (productResult) => productResult.data // normalized state object with ids & entities
);

export const {
  selectAll: selectAllFavorites,
  selectById: selectFavoriteById,
  // Pass in a selector that returns the users slice of state
} = favoriteAdapter.getSelectors(
  (state) => selectFavoriteData(state) ?? initialState
);
