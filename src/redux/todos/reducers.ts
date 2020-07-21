import { CREATE, VIEW, ERRORS, ITodoTypes, IinitialState, MARK_DONE, ICreateTodoParam } from './types';

const initialState: IinitialState= {
    todos:[], message: null, errors: null
};

export const todoReducer = (state=initialState, {type, payload}:ITodoTypes)=>{
    switch(type){
        case CREATE:
            return {...state, message: payload};
        case VIEW:
            return {...state, todos:payload };
        case MARK_DONE:
            const todos:Array<ICreateTodoParam> = []
            state.todos.map(item=>{
                if(String(item.id) === payload){
                    item.done=!item.done;
                }
                todos.push(item);
            });
            return {...state, todos };
        case ERRORS:
            return {...state, errors: payload };
        default:
            return state;
    }
}