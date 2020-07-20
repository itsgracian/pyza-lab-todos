import React, { useState } from 'react'
import ViewTodos from './view.todos'
import { IState } from './types'
import './todos.scss'
import CreateTodo from './create.todo'

const Todos = () => {
  const [state, setState] = useState<IState>({ open: false })
  const onHandleModal = () => {
    setState({ ...state, open: !state.open })
  }
  return (
    <div className="todos">
      {state.open && <CreateTodo onClose={onHandleModal} />}
      <div className="todo-header">
        <div className="container">
          <div className="user-info">
            <div className="logo"></div>
            <div className="name">Hi Clark!</div>
          </div>
          <div className="pending-task">
            You have 6 pending tasks <b>today</b>
          </div>
          <div className="buckets">
            <div className="bold">Buckets</div>
            <div className="categories">
              <div className="category">All</div>
              <div className="category">Chores</div>
              <div className="category">Material Study</div>
            </div>
          </div>
        </div>
      </div>
      <ViewTodos onHandleModal={onHandleModal} />
    </div>
  )
}
export default Todos
