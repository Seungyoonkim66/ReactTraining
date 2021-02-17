import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import { Insert } from './StyledComponent';

const TodoInsert = ({ onInsert }) => {
    const [todo, setTodo] = useState('');

    const handleChange = useCallback( e => {setTodo(e.target.value)}, [] );
    
    const handleSubmit = useCallback( e => {
        onInsert(todo);
        setTodo('');
        e.preventDefault();
    },[onInsert, todo]);

    return (
        <Insert onSubmit={handleSubmit}>
            <input 
                placeholder='Enter what you have to do' 
                value={todo}
                onChange={handleChange}
            />
            <button type='submit' ><MdAdd /></button>
        </Insert>
    );
}

export default TodoInsert;