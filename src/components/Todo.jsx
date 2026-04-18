import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../redux/action';
import Button from './Button';

const Todo = () => {
    const [text, setText] = useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Todo List</h5>
                <div className='input-group mb-3'>
                    <input
                        type="text"
                        className='form-control'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Add a new todo"
                    />
                    <Button 
                        customClass=''
                        onClick={handleAddTodo}
                        children="Add"
                    />
                </div>
                <div className='list-group'>
                    {todos.length > 0 ? (
                        todos.map(todo => (
                            <div key={todo.id} className='list-group-item d-flex justify-content-between align-items-center'>
                                <span
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
                                    onClick={() => handleToggleTodo(todo.id)}
                                    className={`flex-grow-1 ${todo.completed ? 'text-muted' : ''}`}
                                >
                                    {todo.text}
                                </span>
                                <Button
                                    children="Delete"
                                    onClick={() => handleDeleteTodo(todo.id)}
                                    customClass='btn-sm btn-danger'
                                />
                            </div>
                        ))
                    ) : (
                        <div className='text-center text-muted py-3'>No todos yet</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Todo;