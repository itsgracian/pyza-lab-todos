import { CREATE, BUCKETS, VIEW, ERRORS } from './types';
import { AppThunk } from '../';
import { actionHandler, storeItems, getItemsFromStorage } from '../helpers/action';

export const viewAllBucket = ():AppThunk=>(dispatch)=>{
    actionHandler({errorType:ERRORS, data:null, dispatch, cb:()=>{
        const findBucketStorage: any = getItemsFromStorage({key: BUCKETS});
        const convert:Array<string>= JSON.parse(findBucketStorage);
        dispatch({type: VIEW, payload: convert});
    }})
}
export const addBucket = (name: string):AppThunk=>(dispatch)=>{
    actionHandler({errorType: ERRORS, data:null, dispatch, cb:()=>{
        const findBucketStorage: string | any = getItemsFromStorage({key: BUCKETS});
        const find:Array<string> = JSON.parse(findBucketStorage);
        if(find && find.length>0){
            //
            find.push(name);
            storeItems({key: BUCKETS, value: JSON.stringify(find)});
        }else{
            storeItems({key:BUCKETS, value:JSON.stringify([name])});
        }
        dispatch({type:CREATE, payload: 'added successfully.'});
        dispatch(viewAllBucket());
    }})
}