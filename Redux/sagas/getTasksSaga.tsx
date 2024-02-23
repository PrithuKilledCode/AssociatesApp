import axios from 'axios';
import {ApiServices} from '../../Api';
import {call, put} from 'redux-saga/effects';
import {getTasksSuccess} from '../slices/getTasksSlice';

type Initial = {
  userId: string;
  role: string;
  token: string;
  limit?: number;
};
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
  taskList: any; // Assuming taskList is an array of tasks
  totalOffset: number | null;
};
const fetchTasks = async (initial: Initial) => {
  try {
    const config = {
      headers: {Authorization: `Bearer ${initial.token}`},
    };

    const send = {
      userId: initial.userId,
      role: initial.role,
    };

    const res = await axios.post(ApiServices.GetTasksService, send, config);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export function* getTasksFunc(action: {
  payload: Initial;
}): Generator<any, Task, any> {
  console.log(action.payload);

  const tasks = yield call(fetchTasks, action.payload);
  try {
    if (tasks.success === true) {
      yield put(getTasksSuccess(tasks));
      console.log('hahahahhahahhahahh');
    }
  } catch (error) {
    console.log(error);
  }
  return tasks;
}
