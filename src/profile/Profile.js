import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Container = styled.div`
    button{
        background: none;
        border: 1px #555 solid;
        border-radius: 4px;
        padding: 0.3rem 1rem;
    }
`;

const data = {
    seungyoon: {
        name: 'seungyoonkim',
        birth: '1998-09-18',
    },
    keeyoon: {
        name: 'keeyoonkim',
        birth: '1996-0104'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];


    if (!profile) {
        return <div>Not Found</div>
    }


    return (
        <Container>
            <p>{username}({profile.name})</p>
            <p>{profile.birth}</p>
            <Link className='link' to='/profile'><button>reset</button></Link>
        </Container>
    );
}

export default Profile;