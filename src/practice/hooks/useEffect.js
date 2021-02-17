import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('complete rendering');
        console.log({name, nickname});
    },[name, nickname]);

    const handleChangeName = e => setName(e.target.value);
    const handleChangeNickname = e => setNickname(e.target.value);

    return (
        <div>
            <h1>useEffect practice</h1>
            <input value={name} onChange={handleChangeName} placeholder='name'/>
            <input value={nickname} onChange={handleChangeNickname} placeholder='nickname'/>
            <div>이름: {name}</div>
            <div>별명: {nickname}</div>
        </div>
    );
}

export default Info;