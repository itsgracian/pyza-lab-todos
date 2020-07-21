import React, { useState, ChangeEvent, MouseEvent, FC, useEffect } from 'react';
import ViewTodos from './view';
import { IState } from './types';
import './todos.scss';
import CreateTodo from './add';
import { connect, ConnectedProps } from 'react-redux';
import { addTodo, viewAllTodos } from '../../redux/todos/actions';
import { AppState } from '../../redux';
import { ICreateTodoParam } from '../../redux/todos/types';
import { viewAllBucket, addBucket } from '../../redux/buckets/actions';
import { IBuckets } from '../../redux/buckets/types';
import TodoHeader from './header';
const mapState = (state: AppState) => ({
  todoReducer: state.todos,
  bucketReducer: state.buckets,
});
const connector = connect(mapState, { addTodo, viewAllTodos, viewAllBucket, addBucket });
type Iprops = ConnectedProps<typeof connector>;
const Todos: FC<Iprops> = (props) => {
  const [state, setState] = useState<IState>({
    open: false,
    title: '',
    category: '',
    date: '',
    bucket: '',
  });
  const {
    todos,
    errors: todoErrors,
    message: todoMessage,
  }: { todos: Array<ICreateTodoParam>; errors: string; message: string } = props.todoReducer;
  const { buckets }: { buckets: Array<IBuckets>; errors: string } = props.bucketReducer;

  const clearState = () => {
    setState({ ...state, title: '', category: '', date: '', bucket: '', open: false });
  };

  const onHandleModal = () => {
    setState({ ...state, open: !state.open });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onGenerateUuid = (): string => {
    return `${Math.random() * 1000}`;
  };
  const isEmpty = (value: string) => {
    return typeof value === 'string' && value.trim().length !== 0;
  };
  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    const { title, date, category } = state;
    if (isEmpty(title) && isEmpty(date) && isEmpty(category)) {
      props.addTodo({ id: onGenerateUuid(), title, date: new Date(date), category, done: false });
    }
  };

  useEffect(() => {
    const fetch = () => {
      props.viewAllTodos();
      props.viewAllBucket();
    };
    fetch();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (todoErrors || todoMessage) {
      clearState();
    }
    //eslint-disable-next-line
  }, [props.todoReducer]);

  const onSelectCategory = (value: string) => {
    if (value && isEmpty(value)) {
      setState({ ...state, category: value });
    }
  };

  const onSaveBucket = () => {
    if (state.bucket && state.bucket !== '') {
      setState({ ...state, bucket: '' });
      props.addBucket(state.bucket);
    }
  };
  return (
    <div className="todos">
      {state.open && (
        <CreateTodo
          onClose={onHandleModal}
          onChange={onChange}
          onSubmit={onSubmit}
          stateProps={state}
          buckets={buckets}
          onAddBucket={onSaveBucket}
          onSelectCategory={onSelectCategory}
        />
      )}
      <TodoHeader todos={todos} buckets={buckets} />
      <ViewTodos onHandleModal={onHandleModal} todos={todos} />
    </div>
  );
};
export default connector(Todos);
