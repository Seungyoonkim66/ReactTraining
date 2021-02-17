import React, { useState } from 'react';


const EventHandling = () => {
    const [form, setForm] = useState({
        username:'',
        message:''
    })
    
    const { username, message } = form;

    const handleChange = e => {
        const newForm = {
            ...form, // 기존의 form을 이 자리에 복사
            [e.target.name] : e.target.value
        };
        setForm(newForm);
    }

    const handleClick = () => {
       alert(username + ': ' + message);
       console.log(form);
       setForm({
           username:'',
           message:''
       })
    };

    const handleKeyPress = e => {
        if (e.key === 'Enter'){
            handleClick();
        }
    };

    return (
        <div>
            <h1>Event Practice</h1>
            <input
                type='text'
                name='username'
                placeholder='사용자 이름'
                value={username}
                onChange={handleChange}
            />
            <input 
                type='text' 
                name='message' 
                placeholder='아무거나 입력하세요' 
                value={message}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default EventHandling;