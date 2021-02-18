import React from 'react';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';
import qs from 'qs';
import Profile from './Profile';
import History from './History';


const Container = styled.div`
    padding: 3rem;
    .link{
        text-decoration: none;
        color: #555; 
        margin-right: 3rem;
    }
    h3 {
        color: #0091da;
        text-shadow: 2px 2px #dbdbdb;
    }
    .sub-container{
        padding-bottom: 4rem;
        border-bottom: 1px solid #888;
    }
`;


const ProfileMain = ({ location }) => {

    // ignoreQueryPrefix : 문자열 맨 앞의 문자 (2) 생략 
    // /pathname?search 값이 전달됩 
    // ex) localhost:3000/profile?detail=true 로 접속한 경우 query.detail은 'true' 문자열로 반환됨 
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    const parsedQuery = query.username === 'seungyoon';

    const activeStyle= {
        background: 'grey',
        color: 'white'
    }

    return (
        <Container>
            <div className='sub-container'>
                <h3>URL query</h3>
                <a href='profile/?username=seungyoon'>click to transfer url query</a>
                {parsedQuery && <p> username seungyoon 쿼리 전달 </p>}
            </div>

            <div className='sub-container'>
                <h3>sub routing</h3>
                <div>click the user</div>
                <NavLink activeStyle={activeStyle} className='link' to='/profile/seungyoon'>seungyoon profile</NavLink>
                <NavLink activeStyle={activeStyle} className='link' to='/profile/keeyoon'>keeyoon profile</NavLink>
                <Route path='/profile/:username' component={Profile} />
                <Route path='/profile' component={History} />
            </div>

            <div className='sub-container'>
                <h3>location</h3>
                <textarea value={JSON.stringify(location,null,2)} rows={7} readOnly />

            </div>
        </Container>
    );
}

export default ProfileMain;