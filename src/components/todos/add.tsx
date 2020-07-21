import React, { ChangeEvent, MouseEvent } from 'react';
import { IState } from './types';
import { IBuckets } from '../../redux/buckets/types';
type Iprops = {
  onClose: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: MouseEvent) => void;
  stateProps: IState;
  buckets: Array<IBuckets>;
  onAddBucket: () => void;
  onSelectCategory: (value: string) => void;
};
const CreateTodo = (props: Iprops) => {
  const { onClose, onChange, onSubmit, stateProps, buckets, onAddBucket, onSelectCategory } = props;
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
              {buckets && buckets.length > 0 ? (
                <div className="categories cat-form">
                  {buckets.map((bucket, i) => (
                    <div
                      key={i}
                      className={`category ${
                        stateProps.category === String(bucket) && 'green-color'
                      }`}
                      onClick={() => onSelectCategory(String(bucket))}
                    >
                      {bucket}
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <small>buckets not found</small>
                </div>
              )}
              <div className="new-bucket">
                <label>Add new bucket</label>
                <div className="new-bucket-input">
                  <input
                    type="text"
                    placeholder="eg. Trip Plans"
                    name="bucket"
                    onChange={onChange}
                  />
                  <button type="button" className="btn" onClick={onAddBucket}>
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
  );
};
export default CreateTodo;
