import { Dispatch } from 'redux';
export interface IAction<T=any>{
    errorType: string;
    data: T;
    dispatch: Dispatch;
    cb:(response: T)=>void;
};

export interface IStoreItem<T=any>{
    key: string;
    value: T
}