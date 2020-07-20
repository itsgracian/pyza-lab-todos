import React from 'react';
import DatePicker from 'react-datepicker';

const CreateTodo = ()=>{
    return(
        <div className="todo-modal">
            <div className="m-body">
                <div className="m-header">
                    <div className="name">Add new task</div>
                    <button type="button" className="close"><img src={require('../../assets/image/close.svg')} alt=""/></button>
                </div>
                <div className="todo-form">
                    <form action="" autoComplete="off">
                        <div className="f-group">
                            <textarea placeholder="Add a nice title" className="form-input"></textarea>
                        </div>
                        <div className="f-group">
                            <label>Select Date</label>
                            <input type="date" placeholder="select date" className="date"/>
                        </div>
                        <div className="f-group">
                            <label>Set Bucket</label>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateTodo;