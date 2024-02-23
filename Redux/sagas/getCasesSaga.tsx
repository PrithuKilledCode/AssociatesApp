import axios, {AxiosRequestConfig} from 'axios';
import {ApiServices} from '../../Api';
import {call, put} from 'redux-saga/effects';
import {getCasesSuccess} from '../slices/getCasesSlice';
import {useAppSelector} from '../../hooks';
type Initial = {
  requesterId: string;
  requesterRole: string;
  token: string;
};
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

type ApiResponse = {
  cases: Case[];
  currentOffset: number;
  success: boolean;
  totalOffset: number | null;
};
const fetchCases = async (initial: Initial) => {
  try {
    const config = {
      headers: {Authorization: `Bearer ${initial.token}`},
    };

    const send = {
      requesterId: initial.requesterId,
      requesterRole: initial.requesterRole,
    };
    // console.log(initial);
    const res = await axios.post(ApiServices.GetCasesService, send, config);
    // console.log('Ye response hai');

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export function* getCasesFunc(action: {
  payload: Initial;
}): Generator<any, ApiResponse, any> {
  console.log(action.payload);

  const cases = yield call(fetchCases, action.payload);
  try {
    if (cases !== null) {
      yield put(getCasesSuccess(cases));
      // console.log('hahahahhahahhahahh');
    }
  } catch (error) {
    console.log(error);
  }
  return cases;
}
