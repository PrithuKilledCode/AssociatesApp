import axios from 'axios';
import {ApiServices} from '../../Api';
import {call, put} from 'redux-saga/effects';
import {getUserSuccess} from '../slices/getUserSlice';
type Initials = {
  email: string;
  password: string;
  role: 'associate' | 'client';
};

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

interface ResponseData {
  success?: boolean;
  token?: string;
  user?: User;
}

const Login = async (initial: Initials) => {
  try {
    console.log(initial);
    const res = await axios.post(ApiServices.LoginService, initial);
    // console.log('Ye response hai');

    // console.log(res.data);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export function* LoginUser(action: {payload: Initials}) {
  const user = yield call(Login, action.payload);

  try {
    if (user.success === true) {
      // console.log(user);
      yield put(getUserSuccess(user));
    }
  } catch (error) {
    console.log(error);
  }
  return user;
}
