import axios from 'axios';
import {ApiServices} from '../../Api';
import {call, put} from 'redux-saga/effects';
import {getEventsSuccess} from '../slices/getEventSlice';

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

interface EventListResponse {
  currentOffset: number;
  eventList: Event[];
  success: boolean;
  totalOffset: number | null;
}
const fetchEvents = async (initial: Initial) => {
  try {
    const config = {
      headers: {Authorization: `Bearer ${initial.token}`},
    };

    const send = {
      userId: initial.userId,
      role: initial.role,
    };
    // console.log(initial);
    const res = await axios.post(ApiServices.GetEventsService, send, config);

    // console.log(res);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export function* getEventsFunc(action: {
  payload: Initial;
}): Generator<any, Event, any> {
  console.log(action.payload);

  const events = yield call(fetchEvents, action.payload);
  try {
    if (events.success === true) {
      yield put(getEventsSuccess(events));
      console.log('hahahahhahahhahahh');
    }
  } catch (error) {
    console.log(error);
  }
  return events;
}
