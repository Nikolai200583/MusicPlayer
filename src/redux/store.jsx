import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from "./musicApi";
import userReduser from "./slices/userSlice"


export const store = configureStore ({

    reducer: {
        
        [musicApi.reducerPath]: musicApi.reducer,
        user: userReduser
             
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware)
})