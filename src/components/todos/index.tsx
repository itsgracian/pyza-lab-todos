import React from 'react';
import ViewTodos from './view.todos';
import './todos.scss';

const Todos = ()=>{
    return(
        <div className="todos">
            <div className="todo-header">
                <div className="container">
                <div className="user-info"><div className="logo"></div><div className="name">Hi, Clark</div></div>
                <div className="pending-task">You have 6 pending tasks <b>today</b></div>
                <div className="buckets">
                    <div className="bold">Buckets</div>
                    <div className="categories"><div className="category">All</div>
                    <div className="category">Chores</div>
                    <div className="category">Material Study</div></div>
                </div>
                </div>
            </div>
            <ViewTodos/>
        </div>
    )
}
export default Todos