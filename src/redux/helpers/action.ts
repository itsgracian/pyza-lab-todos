import { Dispatch } from 'redux';
import { IAction, IStoreItem } from './types';
export const actionHandler = ({errorType, data, dispatch, cb }:IAction)=>{
    try {
        cb(data);
    } catch (error) {
        dispatch({type: errorType, payload: 'something wrong try again later.'});
    }
};

export const storeItems = ({key, value }:IStoreItem)=>{
    localStorage.setItem(key, value);
};

export const getItemsFromStorage = ({key}: {key: string})=>{
    const items = localStorage.getItem(key);
    return items;
}