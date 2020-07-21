import React, { Fragment, useState, useEffect } from 'react';
import { IBuckets } from '../../redux/buckets/types';
import { ICreateTodoParam } from '../../redux/todos/types';
type Iprops = {
  buckets: IBuckets[];
  todos: ICreateTodoParam[];
  onFilterByCategory: (category: string) => void;
  onViewAll: () => void;
};

const TodoHeader = (props: Iprops) => {
  const [state, setState] = useState<{ pendingTask: number }>({ pendingTask: 0 });
  const { buckets, todos, onFilterByCategory, onViewAll } = props;
  const convertDate = (value: string) => {
    const date = new Date(value);
    const newDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return newDate;
  };
  const onFindPendingTask = (data: Array<ICreateTodoParam>) => {
    const filter = data.filter(
      (item) =>
        item.done === false && convertDate(String(item.date)) === convertDate(String(new Date()))
    );
    setState({ ...state, pendingTask: filter.length });
  };
  useEffect(() => {
    onFindPendingTask(todos);
    //eslint-disable-next-line
  }, [todos]);
  return (
    <div className="todo-header">
      <div className="container">
        <div className="user-info">
          <div className="logo"></div>
          <div className="name">Hi Clark!</div>
        </div>
        <div className="pending-task">
          {todos && todos.length > 0 ? (
            <Fragment>
              You have {state.pendingTask === 0 ? 'no' : state.pendingTask} pending tasks{' '}
              <b>today</b>
            </Fragment>
          ) : (
            <small className="bold f-13">no pending task available</small>
          )}
        </div>
        <div className="buckets">
          <div className="bold">Buckets</div>
          {buckets && buckets.length > 0 ? (
            <Fragment>
              <div className="categories">
                <div className="category all-color" onClick={onViewAll}>
                  All
                </div>
                {buckets.map((item, i) => (
                  <div
                    className="category"
                    key={i}
                    onClick={() => onFilterByCategory(String(item))}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Fragment>
          ) : (
            <small className="bold f-13">buckets not available</small>
          )}
        </div>
      </div>
    </div>
  );
};
export default TodoHeader;
