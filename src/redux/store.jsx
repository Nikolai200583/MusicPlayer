import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from "./musicApi";

export const store = configureStore ({
    reducer: {
        [musicApi.reducerPath]: musicApi.reducer,        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware)
})