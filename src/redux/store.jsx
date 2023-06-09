import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from "./musicApi";
import userReduser from "./slices/userSlice";
import currentTrackReducer from "./slices/setTracks";
import setFiltersReducer from "./slices/setFilters"


export const store = configureStore ({

    reducer: {
        
        [musicApi.reducerPath]: musicApi.reducer,
        user: userReduser,
        currentTrack: currentTrackReducer,
        setFilters: setFiltersReducer,
             
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicApi.middleware)
})