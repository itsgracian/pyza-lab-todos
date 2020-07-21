import { CREATE, VIEW, ERRORS, ITodoTypes, IinitialState, MARK_DONE } from './types';

const initialState: IinitialState= {
    todos:[], message: null, errors: null
};

export const todoReducer = (state=initialState, {type, payload}:ITodoTypes)=>{
    switch(type){
        case CREATE:
        case MARK_DONE:
            return {...state, message: payload};
        case VIEW:
            return {...state, todos:payload };
        case ERRORS:
            return {...state, errors: payload };
        default:
            return state;
    }
}