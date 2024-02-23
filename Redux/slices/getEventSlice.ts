import {createSlice} from '@reduxjs/toolkit';
type Initial = {
  userId: string;
  role: string;
  token: string;
  limit?: number;
};
interface Event {
  __v: number;
  _id: string;
  adminId: string;
  associateId: string;
  caseId: any; // You might want to define a type for caseId
  clientId: string;
  createdAt: string;
  date: string;
  dateAndTime: string;
  eventDetail: string;
  eventName: string;
  monthAndYear: string;
}

interface ApiResponse {
  currentOffset: number;
  eventList: Event[];
  success: boolean;
  totalOffset: number | null;
}
type startState = {
  inital: {} | Initial;
  events: null | ApiResponse;
  isLoading: boolean;
};
// Define the initial state using that type
const initialState: startState = {
  inital: {},
  events: null,
  isLoading: false,
};

export const getEventsSlice = createSlice({
  name: 'getEvents',
  // `getSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getEvents: (state, action) => {
      state.inital = action.payload;
      state.isLoading = true;
    },
    getEventsSuccess: (state, action) => {
      state.events = action.payload;
      state.isLoading = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    getEventsFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {getEvents, getEventsSuccess, getEventsFailure} =
  getEventsSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default getEventsSlice.reducer;
