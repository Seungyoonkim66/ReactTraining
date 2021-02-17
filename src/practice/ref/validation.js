import React, { useState } from 'react';
import './validation.css';

const staticPassword = '0000';

const Validation = () => {
    let reference = React.createRef();

    const [password, setPassword] = useState('');
    const [clicked, setClicked] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleChange = e => {
        setPassword(e.target.value);
    }

    const handleClick = () =>{
        setClicked(true);
        setValidated(password===staticPassword);
        reference.current.focus();
    }

    return(
        <div>
            <h1>Ref Practice</h1>
            <input 
                ref={reference}
                type='password'
                value={password}
                onChange={handleChange}
                className={clicked ? (validated ? 'success' : 'failure') :''}
            />
            <button onClick={handleClick}>Validate</button>
        </div>
    );
}

export default Validation;