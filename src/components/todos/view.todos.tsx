import React, { Fragment } from 'react';
import accept from '../../assets/image/accept.svg';
import { ICreateTodoParam } from '../../redux/todos/types';
import { AiOutlineFrown } from 'react-icons/ai';
type Iprops = {
  onHandleModal: () => void;
  todos: Array<ICreateTodoParam>;
};
const ViewTodos = (props: Iprops) => {
  const { onHandleModal, todos } = props;
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
                  <div className="icon">
                    <img src={accept} alt={accept} />
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
