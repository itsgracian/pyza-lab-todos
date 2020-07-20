import React, { ChangeEvent, MouseEvent } from 'react'
import { IState } from './types'
type Iprops = {
  onClose: () => void
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSubmit: (e: MouseEvent) => void
  stateProps: IState
}
const CreateTodo = (props: Iprops) => {
  const { onClose, onChange, onSubmit, stateProps } = props
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
              <textarea
                placeholder="Add a nice title"
                className="form-input"
                name="title"
                onChange={onChange}
              >
                {stateProps.title}
              </textarea>
            </div>
            <div className="f-group">
              <label>Select Date</label>
              <input
                type="date"
                placeholder="select date"
                className="date"
                name="date"
                onChange={onChange}
                value={stateProps.date}
              />
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
              <button type="button" className="btn save-btn" onClick={onSubmit}>
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
