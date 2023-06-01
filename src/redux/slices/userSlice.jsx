import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   
    email: null,
    id: null,
    token: null,
  };



const userSlice = createSlice({
  name: 'user',
    initialState,
  

  reducers: {    
    userLogin: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },

    userLogout: (state) => {
      state.token = null;
      state.username = null;
      state.email = null;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;