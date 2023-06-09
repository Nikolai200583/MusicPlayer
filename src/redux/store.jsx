import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from "./musicApi";
import userReduser from "./slices/userSlice";
import currentTrackReducer from "./slices/setTracks";


export const store = configureStore ({

    reducer: {
        
        [musicApi.reducerPath]: musicApi.reducer,
        user: userReduser,
        currentTrack: currentTrackReducer
             
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware)
})