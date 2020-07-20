export const CREATE = 'ADD_TODO';
export const VIEW = 'VIEW_ALL_TODOS';
export const ERRORS = 'TODO_ERRORS';
export interface ICreateTodoParam{
    title: string;
    id: string;
    category: string;
    date: Date;
}

interface ICreate{
    type: typeof CREATE;
    payload: {
        message: string;
    }
}
interface IView{
    type: typeof VIEW;
    payload: ICreateTodoParam[];
}

interface IErrors {
    type: typeof ERRORS;
    payload: {
        errors: string;
    }
}

export interface IinitialState{
    todos: Array<ICreateTodoParam>;
    message: string;
    errors: string;
}
export type ITodoTypes = ICreate | IView | IErrors;