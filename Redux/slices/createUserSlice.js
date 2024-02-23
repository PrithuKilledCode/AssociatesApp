import {createSlice} from '@reduxjs/toolkit';

// Define a type for the slice state

// Define the initial state using that type
const initialState = {
  user: {},
  isLoading: false,
};

export const createUserSlice = createSlice({
  name: 'createUser',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = true;
    },
    createUserSuccess: state => {
      state.isLoading = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    createUserFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {createUser, createUserSuccess, createUserFailure} =
  createUserSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default createUserSlice.reducer;
