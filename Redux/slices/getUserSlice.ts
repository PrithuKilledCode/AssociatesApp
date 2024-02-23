import {createSlice} from '@reduxjs/toolkit';

// Define a type for the slice state
type User = {
  success: boolean;
  token: string;
  user: {
    __v: number;
    _id: string;
    address: string;
    adminId: string;
    bio: string;
    createdAt: string; // This should ideally be a Date type if possible
    email: string;
    fcmToken: string | null;
    firstName: string;
    graduatedFrom: string;
    lastName: string;
    lawFirmId: string;
    password: string;
    phone: number;
    practice: string;
    profileUrl: string;
    role: string;
    sendBirdId: string | null;
    status: boolean;
  };
};
type startState = {
  inital: {} | {email: string; password: string; role: 'associate' | 'client'};
  user: null | User;
  isLoading: boolean;
};
// Define the initial state using that type
const initialState: startState = {
  inital: {},
  user: null,
  isLoading: false,
};

export const getUserSlice = createSlice({
  name: 'getUser',
  // `getSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    getUser: (state, action) => {
      state.inital = action.payload;
      state.isLoading = true;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    getUserFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {getUser, getUserSuccess, getUserFailure} = getUserSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default getUserSlice.reducer;
