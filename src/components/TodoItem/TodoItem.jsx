import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
const TodoItem = (props) => {
    const [isEditable, setIsEditable] = useState(false);
    const { item, index, onClick } = props
    const editableHandler = () =>{
      setIsEditable(true);
    }
  return (
     <li className='todo_item' key={index}  onBlur={()=> setIsEditable(false)}>
                            <div className="todo_span">
                                <span className='todo_text' contentEditable={isEditable}>{item}</span>
                                <div className="todo_action">
                                <span className='todo_delete' onClick={onClick}><FontAwesomeIcon icon={faTrash} /></span>
                                <span className='todo_delete' onClick={editableHandler}><FontAwesomeIcon icon={faEdit} /></span>
                                </div>
                             </div>
    </li>
  )
}

export default TodoItem