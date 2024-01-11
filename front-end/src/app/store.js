import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from './api/apiSlice'
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from '../features/auth/authSlice'

// Creating the Redux store using the configureStore function
export const store = configureStore({
    // Configuring the reducers for the store
    reducer: {
       
        [apiSlice.reducerPath]: apiSlice.reducer,
        // Adding the 'auth' reducer
        auth: authReducer,
    },
    // Configuring middleware for the store
    middleware: getDefaultMiddleware =>
        // Using getDefaultMiddleware to include default middleware and adding API middleware
        getDefaultMiddleware().concat(apiSlice.middleware),
    
    devTools: false
});

// Setting up listeners for the store's dispatch function to enable automatic query updates
setupListeners(store.dispatch);





