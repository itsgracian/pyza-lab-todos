import React from 'react'
import DatePicker from 'react-datepicker'

type Iprops = {
  onClose: () => void
}
const CreateTodo = (props: Iprops) => {
  const { onClose } = props
  return (
    <div className="todo-modal">
      <div className="m-body">
        <div className="m-header">
          <div className="name">Add new task</div>
          <button type="button" className="close">
            <img src={require('../../assets/image/close.svg')} alt="" onClick={onClose} />
          </button>
        </div>
        <div className="todo-form">
          <form action="" autoComplete="off">
            <div className="f-group">
              <textarea placeholder="Add a nice title" className="form-input"></textarea>
            </div>
            <div className="f-group">
              <label>Select Date</label>
              <input type="date" placeholder="select date" className="date" />
            </div>
            <div className="f-group">
              <label>Set Bucket</label>
              <div className="categories cat-form">
                <div className="category">All</div>
                <div className="category">Chores</div>
                <div className="category">Material Study</div>
              </div>
              <div className="new-bucket">
                <label>Add new bucket</label>
                <div className="new-bucket-input">
                  <input type="text" placeholder="eg. Trip Plans" />
                  <button type="button" className="btn">
                    +&nbsp;add
                  </button>
                </div>
              </div>
            </div>
            <div className="f-group">
              <button type="button" className="btn save-btn">
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default CreateTodo
