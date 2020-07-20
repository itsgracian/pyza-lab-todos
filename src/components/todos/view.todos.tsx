import React from 'react';
import accept from '../../assets/image/accept.svg';
const ViewTodos = ()=>{
    return(
        <div className="view-todos">
            <div className="todo-items">
                <div className="add">
                    <button>+ add task</button>
                </div>
                <div className="items">
                    <div className="name item-property">Take backy's car for watch</div>
                    <div className="date item-property">{new Date().toDateString()}</div>
                    <div className="category">
                        <div className="category-name">chores</div>
                    </div>
                    <div className="accept">
                        <div className="icon"><img src={accept} alt={accept} /></div>
                    </div>
                </div>
                <div className="items">
                    <div className="name item-property">Take backy's car for watch</div>
                    <div className="date item-property">{new Date().toDateString()}</div>
                    <div className="category">
                        <div className="category-name">chores</div>
                    </div>
                    <div className="accept">
                        <div className="icon"><img src={accept} alt={accept} /></div>
                    </div>
                </div>
                <div className="items">
                    <div className="name item-property">Take backy's car for watch</div>
                    <div className="date item-property">{new Date().toDateString()}</div>
                    <div className="category">
                        <div className="category-name">chores</div>
                    </div>
                    <div className="accept">
                        <div className="icon"><img src={accept} alt={accept} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewTodos;