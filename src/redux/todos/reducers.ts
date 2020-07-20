import { CREATE, VIEW, ERRORS, ITodoTypes, IinitialState } from './types';

const initialState: IinitialState= {
    todos:[], message: null, errors: null
};

export const todoReducer = (state=initialState, {type, payload}:ITodoTypes)=>{
    switch(type){
        case CREATE:
            return {...state, message: payload};
        case VIEW:
            return {...state, todos:payload };
        case ERRORS:
            return {...state, errors: payload };
        default:
            return state;
    }
}