import React, { Fragment } from 'react';
import { IBuckets } from '../../redux/buckets/types';
import { ICreateTodoParam } from '../../redux/todos/types';
type Iprops = {
  buckets: IBuckets[];
  todos: ICreateTodoParam[];
};

const TodoHeader = (props: Iprops) => {
  const { buckets, todos } = props;
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
              You have 6 pending tasks <b>today</b>
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
                {buckets.map((item, i) => (
                  <div className="category" key={i}>
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
