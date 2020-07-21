import React, { Fragment } from 'react';
import { ICreateTodoParam } from '../../redux/todos/types';
import { AiOutlineFrown, AiFillCheckCircle } from 'react-icons/ai';
type Iprops = {
  onHandleModal: () => void;
  todos: Array<ICreateTodoParam>;
  onMarkAsDone: (id: string) => void;
};
const ViewTodos = (props: Iprops) => {
  const { onHandleModal, todos, onMarkAsDone } = props;
  const accept = 'https://res.cloudinary.com/heza/image/upload/v1595325050/challenges/accept_kjq4mz.svg';
  return (
    <div className="view-todos">
      <div className="todo-items">
        <div className="add">
          <button onClick={onHandleModal}>+ add task</button>
        </div>
        {todos && todos.length > 0 ? (
          <Fragment>
            {todos.map((item) => (
              <div className="items" key={item.id}>
                <div className="name item-property">{item.title}</div>
                <div className="date item-property">{new Date(item.date).toDateString()}</div>
                <div className="category">
                  <div className="category-name">{item.category}</div>
                </div>
                <div className="accept">
                  <div className="icon" onClick={() => onMarkAsDone(item.id)}>
                    {item.done && <AiFillCheckCircle/>}
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ) : (
          <div className="not-found">
            <AiOutlineFrown /> <div className="text">no result found.</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ViewTodos;
