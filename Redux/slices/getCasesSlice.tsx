import {createSlice} from '@reduxjs/toolkit';

// Define a type for the slice state
type Case = {
  __v: number;
  _id: string;
  adminId: string;
  caseName: string;
  caseSummary: string;
  courtCaseId: string;
  createdAt: string; // This should ideally be a Date type if possible
  lawFirmId: string;
  status: boolean;
  totalAssociate: number;
};
type Initial = {
  requesterId: string;
  requesterRole: string;
  token: string;
  limit?: number;
};
type ApiResponse = {
  cases: Case[];
  currentOffset: number;
  success: boolean;
  totalOffset: number | null;
};
type startState = {
  inital: {} | Initial;
  cases: null | ApiResponse;
  isLoading: boolean;
};
// Define the initial state using that type
const initialState: startState = {
  inital: {},
  cases: null,
  isLoading: false,
};

export const getCasesSlice = createSlice({
  name: 'getCase',
  // `getSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getCases: (state, action) => {
      state.inital = action.payload;
      state.isLoading = true;
    },
    getCasesSuccess: (state, action) => {
      state.cases = action.payload;
      state.isLoading = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    getCasesFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {getCases, getCasesSuccess, getCasesFailure} =
  getCasesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default getCasesSlice.reducer;
