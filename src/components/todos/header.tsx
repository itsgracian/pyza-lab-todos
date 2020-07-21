import React, { Fragment, useState, useEffect, ChangeEvent } from 'react';
import { IBuckets } from '../../redux/buckets/types';
import { ICreateTodoParam } from '../../redux/todos/types';
import { convertDate } from '../../redux/helpers/action';

type Iprops = {
  buckets: IBuckets[];
  todos: ICreateTodoParam[];
  onFilterByCategory: (category: string) => void;
  onViewAll: () => void;
  onFilterByDate: (date: Date) => void;
};

const TodoHeader = (props: Iprops) => {
  const [state, setState] = useState<{ pendingTask: number; today: string }>({
    pendingTask: 0,
    today: `${new Date()}`,
  });
  const { buckets, todos, onFilterByCategory, onViewAll, onFilterByDate } = props;
  const onFindPendingTask = (data: Array<ICreateTodoParam>) => {
    const filter = data.filter(
      (item) => item.done === false && convertDate(String(item.date)) === convertDate(state.today)
    );
    setState({ ...state, pendingTask: filter.length });
  };
  useEffect(() => {
    onFindPendingTask(todos);
    //eslint-disable-next-line
  }, [todos]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    onFilterByDate(new Date(value));
  };
  return (
    <div className="todo-header">
      <div className="container">
        <div className="user-info">
          <div className="logo"></div>
          <div className="name">Hi Clark!</div>
        </div>
        <div className="pending-task">
          {todos && todos.length > 0 ? (
            <div className="pending">
              <div>You have {state.pendingTask === 0 ? 'no' : state.pendingTask} pending tasks</div>
              <div className="date-item">
                <input type="date" className="date" onChange={onChange} name="today" />
                <button type="button" className="date-btn bold">
                  {convertDate(String(state.today)) === convertDate(String(new Date())) ? (
                    'today'
                  ) : (
                    <small className="bold">{new Date(state.today).toDateString()}</small>
                  )}
                </button>
              </div>
            </div>
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
