import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Container = styled.div`
    button{
        background: none;
        border: none;
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
            <Link className='link' to='/profile'><button>back</button></Link>
            <h3>{username}({profile.name})</h3>
            <p>{profile.birth}</p>
        </Container>
    );
}

export default Profile;