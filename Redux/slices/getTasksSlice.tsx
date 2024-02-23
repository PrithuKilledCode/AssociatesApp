import {createSlice} from '@reduxjs/toolkit';
type Initial = {
  userId: string;
  role: string;
  token: string;
  limit?: number;
};
// Define a type for the slice state
type Task = {
  __v: number;
  _id: string;
  adminId: string;
  associateId: string;
  caseId: any; // Type should be specified if the structure of caseId is known
  clientId: string;
  createdAt: string; // This should ideally be a Date type if possible
  taskDescription: string;
  taskName: string;
};
type ApiResponse = {
  currentOffset: number;
  success: boolean;
  taskList: Task[]; // Assuming taskList is an array of tasks
  totalOffset: number | null;
};
type startState = {
  inital: {} | Initial;
  tasks: null | ApiResponse;
  isLoading: boolean;
};
// Define the initial state using that type
const initialState: startState = {
  inital: {},
  tasks: null,
  isLoading: false,
};

export const getTasksSlice = createSlice({
  name: 'getTasks',
  // `getSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getTasks: (state, action) => {
      state.inital = action.payload;
      state.isLoading = true;
    },
    getTasksSuccess: (state, action) => {
      state.tasks = action.payload;
      state.isLoading = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    getTasksFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {getTasks, getTasksSuccess, getTasksFailure} =
  getTasksSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default getTasksSlice.reducer;
