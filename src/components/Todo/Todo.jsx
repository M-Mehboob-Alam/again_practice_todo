import React, { useState } from 'react'
import './Todo.css'
import toast from'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import TodoItem from '../TodoItem/TodoItem';
const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const inputValueHandler = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    }
    const clickButtonHandler = () => {
        if (inputValue === '') {
            alert('Please enter a Todo');
            return '';            
        }
        setTodoList([...todoList, inputValue]);
        setInputValue('');
        toast.success('Todo Added Successfully');
    }
    const todoListHandler = () =>{
        setTodoList([...todoList, inputValue]);
    }
    const delHandler = (name) => {
        const newTodoList = todoList.filter((item, index) => {
            return name !=item;
        });
        setTodoList(newTodoList);
        toast.success('Todo Deleted Successfully');
    }
    
  return (
    <div className='todo_wrapper'>
        
        <input type="text" className='add_todo' value={inputValue} onChange={inputValueHandler} placeholder='Enter your todo' />
        <button onClick={clickButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
            Add New Todo Item</button>

        <div className='todo_list'>
            <h1>Todo List</h1>
            <ul>

            {
                todoList.length > 0  ? 
                todoList.map((item, index) => {
                    return (

                            <TodoItem key={index} onClick={() => delHandler(item)} item={item}/>
                        // <li className='todo_item' key={index} onClick={() => delHandler(item)}>
                        //     <div className="todo_span">
                        //         <span className='todo_text'>{item}</span>
                        //         <span className='todo_delete'><FontAwesomeIcon icon={faTrash} /></span>
                        //     </div>
                        // </li>
                    )
                })  
                : (
                    <h1 className='no_to_found'>No Todo</h1>
                )

            }
            </ul>
        </div>
    </div>
  )
}

export default Todo