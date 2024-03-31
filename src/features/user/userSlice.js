import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
  },
});
//This will create a slice object that has a name of "user", an initialState object with a currentUser property set to null, and a setCurrentUser reducer function.
//The setCurrentUser reducer function will take the current state and an action as arguments and return a new state object with the currentUser property set to the payload of the action.

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;
