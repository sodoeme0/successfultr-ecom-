import { createSlice } from "@reduxjs/toolkit";

const getTokenFromLocalStorage = () => {
  // Retrieve token from localStorage if not there return null
  return localStorage.getItem("userToken") || null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: { token: getTokenFromLocalStorage() }, // Initialize the token from localStorage
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      // Save the token to localStorage
      localStorage.setItem("userToken", accessToken);
      // Update the state with the new token
      state.token = accessToken;
    },
    logOut: (state) => {
      // Clear the token from localStorage during logout
      localStorage.removeItem("userToken");
      // Reset the token in the state
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;








// import { createSlice } from '@reduxjs/toolkit'

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: { token: null },
//     reducers: {
//         setCredentials: (state, action) => {
//             const { accessToken } = action.payload
//             state.token = accessToken
//         },
//         logOut: (state, action) => {
//             state.token = null
//         },
//     }
// })

// export const { setCredentials, logOut } = authSlice.actions

// export default authSlice.reducer

// export const selectCurrentToken = (state) => state.auth.token