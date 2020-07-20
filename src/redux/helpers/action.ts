import { Dispatch } from 'redux';

interface IParam<T=any>{
    errorType: string;
    data: T;
    dispatch: Dispatch;
    cb:(response: T)=>void;
}
export const actionHandler = ({errorType, data, dispatch, cb }:IParam)=>{
    try {
        cb(data);
    } catch (error) {
        dispatch({type: errorType, payload: 'something wrong try again later.'});
    }
}