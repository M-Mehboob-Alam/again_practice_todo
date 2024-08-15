import React, { useState } from 'react'
import './Todo.css'
const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const inputValueHandler = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    }
    const clickButtonHandler = () => {
        setTodoList([...todoList, inputValue]);
        setInputValue('');
    }
    const todoListHandler = () =>{
        setTodoList([...todoList, inputValue]);
    }
    const delHandler = (name) => {
        const newTodoList = todoList.filter((item, index) => {
            return name !=item;
        });
        setTodoList(newTodoList);
    }
  return (
    <div className='todo_wrapper'>
        <h1>Todo</h1>
        <input type="text" className='add_todo' value={inputValue} onChange={inputValueHandler} placeholder='Enter your todo' />
        <button onClick={clickButtonHandler}>Add</button>

        <div className='todo_list'>
            <h1>Todo List</h1>
            <ul>

            {
                todoList.length > 0  ? 
                todoList.map((item, index) => {
                    return (
                        <li className='todo_item' key={index} onClick={() => delHandler(item)}>
                            {item}
                        </li>
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