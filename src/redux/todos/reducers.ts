import { CREATE, VIEW, ERRORS, ITodoTypes } from './types';

const initialState= {};

export const todoReducer = (state=initialState, {type, payload}:ITodoTypes)=>{
    switch(type){
        case CREATE:
            return {...state, message: payload};
        case VIEW:
            return {...state, todos: payload };
        case ERRORS:
            return {...state, errors: payload };
        default:
            return state;
    }
}