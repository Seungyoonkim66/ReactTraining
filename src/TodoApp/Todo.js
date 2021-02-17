import React, { useState, useCallback, useRef, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const numOfTOdos = 2500;

function createBulkTodos() {
    const array = [];
    for ( let i = 1; i < numOfTOdos; i++){
        array.push({ id: i, text: `to do ${i}`, checked: false, });
    }
    return array;
}

function reducer (todos, action) {
    switch(action.type){
        case 'INSERT':
            //action = { type: 'INSERT' , todo: { id: *, text: '***', checked: false }}
            return todos.concat(action.todo);
        case 'REMOVE':
            // action = { type:'REMOVE', id: * }
            return todos.filter( todo => todo.id !==  action.id );
        case 'TOGGLE':
            // action = { type: 'TOGGLE', id: * }
            return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,);
        default:
            return todos;
    }
}


const Todo = () => {

    // 세번째 파라미터에 초기 상태 만들어주는 함수 -> 맨처음 렌더링 될 때만 createBulkTodos 함수 호출
    const [todos, dispatch] = useReducer(reducer, undefined, createBulkTodos);

    const nextId = useRef(numOfTOdos+1);

    const onInsert = useCallback( text => {
        const newTodo = {
            id:nextId.current,
            text,
            checked: false,
        };
        // 성능 최적화) 함수형 업데이트 
        dispatch({ type:'INSERT', newTodo })
        nextId.current += 1;
    }, []);

    const onRemove = useCallback( id => {
        dispatch({ type:'REMOVE', id });
    }, []);

    const onToggle = useCallback( id => {
        dispatch({ type:'TOGGLE', id });
    }, []);

    return (
        <div>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
            </TodoTemplate>
        </div>
    );
}


export default Todo;
