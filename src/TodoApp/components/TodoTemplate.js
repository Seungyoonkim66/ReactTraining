import React from 'react';
import { Template, AppTitle, Content } from './StyledComponent';

const TodoTemplate = ({ children }) => {
    return (
        <Template>
            <AppTitle>Todo</AppTitle>
            <Content>{children}</Content>
        </Template>
    );
}

export default TodoTemplate;