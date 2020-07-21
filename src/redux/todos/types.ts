export const CREATE = 'ADD_TODO';
export const VIEW = 'VIEW_ALL_TODOS';
export const ERRORS = 'TODO_ERRORS';
export const TODOS = 'TODOS';
export const MARK_DONE = 'MARK_TODO_AS_DONE';
export interface ICreateTodoParam{
    title: string;
    id: string;
    category: string;
    date: Date;
    done: boolean;
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
interface IMarkDone{
    type: typeof MARK_DONE;
    payload: string;
}
export interface IinitialState{
    todos: Array<ICreateTodoParam>;
    message: string | null;
    errors: string | null;
}
export type ITodoTypes = ICreate | IView | IErrors | IMarkDone;