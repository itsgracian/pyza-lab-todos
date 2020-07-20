import { CREATE, VIEW, IBucketType, ERRORS } from './types';

const initialState = {};
export const bucketReducer = (state=initialState, {type, payload}: IBucketType)=>{
    switch(type){
        case CREATE:
            return {...state, message: payload};
        case VIEW:
            return {...state, buckets: payload};
        case ERRORS:
            return {...state, errors: payload};
        default:
            return state;
    }
}