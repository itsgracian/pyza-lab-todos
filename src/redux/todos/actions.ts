import { CREATE, VIEW, ERRORS, ICreateTodoParam } from './types';
import { actionHandler } from '../helpers/action';
import { AppThunk } from '../index';

export const addTodo = (object:ICreateTodoParam):AppThunk=>(dispatch)=>{
  actionHandler({errorType: ERRORS, data: object, dispatch,cb:(response)=>{
     dispatch({type: CREATE, payload: response });
  }});
}