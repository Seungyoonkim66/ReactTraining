import React, { useState } from 'react';


const EventHandling = () => {
    
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleClick = () => {
        alert(message);
        setMessage('');
    }

    return (
        <div>
            <h1>Event Practice</h1>
            <input 
                type='text' 
                name='message' 
                placeholder='아무거나 입력하세요' 
                value={message}
                onChange={handleChange}
            />
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

export default EventHandling;