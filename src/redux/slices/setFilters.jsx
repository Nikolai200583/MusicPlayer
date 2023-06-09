import { createSlice } from '@reduxjs/toolkit';

const initialState = {   
    years: ''
  };

const setFilters = createSlice({
  name: 'setFilters',
    initialState,
  

  reducers: {   

    setFilterYears: (state, action) => {
    state.years = action.payload.years;     
    },

   
  },
});

export const {setFilterYears} = setFilters.actions;
export default setFilters.reducer;