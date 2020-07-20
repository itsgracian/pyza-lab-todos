import { CREATE, VIEW, ERRORS, ICreateTodoParam, TODOS } from './types';
import { actionHandler, storeItems, getItemsFromStorage } from '../helpers/action';
import { AppThunk } from '../index';


export const viewAllTodos = ():AppThunk=>(dispatch)=>{
  actionHandler({errorType: ERRORS, data: null, dispatch, cb:()=>{
    const data: any = getItemsFromStorage({key: TODOS});
    const convert:Array<ICreateTodoParam>= JSON.parse(data);
    dispatch({type: VIEW, payload: convert});
  }});
};

export const addTodo = (object:ICreateTodoParam):AppThunk=>(dispatch)=>{
  actionHandler({errorType: ERRORS, data: object, dispatch,cb:()=>{
    const data: any = getItemsFromStorage({key: TODOS});
    const convert:Array<ICreateTodoParam>= JSON.parse(data);
    if(convert && convert.length > 0 ){
      convert.push(object);
      storeItems({key: TODOS, value: JSON.stringify(convert)});
    }else{
      const stringify = JSON.stringify([object]);
      storeItems({key: TODOS, value: stringify});
    }
     dispatch({type: CREATE, payload: 'saved successfully'});
     dispatch(viewAllTodos());
  }});
}