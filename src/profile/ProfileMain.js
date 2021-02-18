import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    .link{
        text-decoration: none;
        color: #555;
    }
`;


const ProfileMain = () => {

    return (
        <Container>
            <Link className='link' to='profile/seungyoon'><p>seungyoon profile</p></Link>
            <Link className='link' to='profile/keeyoon'><p>keeyoon profile</p></Link>
        </Container>
    );
}

export default ProfileMain;