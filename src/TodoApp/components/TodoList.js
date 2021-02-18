import React from 'react';
import { List } from './StyledComponent';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return(
        <List>
            {todos.map(todo => 
                <TodoListItem 
                    key={todo.id}
                    todo={todo} 
                    onRemove={onRemove} 
                    onToggle={onToggle}
                />
            )}
        </List>
    );
}

export default React.memo(TodoList);