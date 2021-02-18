import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: static;
    z-index: 10000;
    padding: 2rem 4rem;
    button{
        background: none;
        color: #555;
        text-transform: uppercase;
        border: none;
        margin-left: 2rem;
        &:hover{
            color: #22b8cf;
        }
    }
`;

const Header = () => {
    const menus = [
        { id: 1, name: 'home', link:'/'},
        { id: 2, name: 'todoapp', link:'/todo'},
        { id: 3, name: 'practice', link:'/practice'},
        { id: 4, name: 'profile', link:'/profile'},
        { id: 5, name: 'news', link:'/news'},
    ];

    return(
        <Container>
            {menus.map(menu => <Link key={menu.id} to={menu.link}><button>{menu.name}</button></Link>)}
        </Container>
    );
}

export default Header;