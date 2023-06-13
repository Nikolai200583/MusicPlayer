import { createSlice } from '@reduxjs/toolkit';

const initialState = {   
    years: [],
    author: [],
    genre: []
  };

const setFilters = createSlice({
  name: 'setFilters',
    initialState,
  

  reducers: {   
    setFilterYears: (state, action) => {
        state.years = action.payload.years;     
    },

    removeFilterYears: (state) => {
      state.years = [];     
  },

    setFilterAuthor: (state, action) => { 
         
        if(state.author.includes(action.payload.author)){
            return
        }       
        state.author.push(action.payload.author);     
        },

        removeFilterAuthor: (state) => {
          state.author = [];     
      },

    setFilterGenre: (state, action) => {

        if(state.genre.includes(action.payload.genre)){
            return
        } 
        state.genre.push(action.payload.genre);       
    },
   removeFilterGenre: (state) => {
          state.genre = [];     
      },
  },
});

export const {setFilterYears, setFilterAuthor, setFilterGenre, removeFilterYears, removeFilterAuthor, removeFilterGenre} = setFilters.actions;
export default setFilters.reducer;