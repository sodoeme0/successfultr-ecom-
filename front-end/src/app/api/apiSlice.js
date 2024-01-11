import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// Defining the URL for API requests based on the environment variable or defaulting to a local URL
const url = process.env.REACT_APP_BASEURL || "http://localhost:3500";
// Creating an API slice configuration using the createApi function
export const apiSlice = createApi({
  // base url
  baseQuery: fetchBaseQuery({ baseUrl: url }),

  // Defining tag types that can be used to categorize API requests (not entirely sure how this works)
  tagTypes: ["User", "Product", "Favorites"],

  // Defining API endpoints using the builder parameter (not entirely sure how this works)
  endpoints: (builder) => ({}),
});
