import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = list => {
    console.log('평균값 계산 중...');
    if (list.length===0) return 0;
    const sum = list.reduce((a,b) => a+b);
    return sum/list.length;
}

const Average = () => {
    const [list,setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputElement = useRef(null);

    // 처음 렌더링될 때만 함수 생성 
    const handleChange = useCallback( e => {setNumber(e.target.value)}, []);
    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            handleClick();
        }
    }
    // number or list가 바뀌었을 때만 함수 생성 
    const handleClick = useCallback(e => {
        const newList = list.concat(parseInt(number));
        setList(newList);
        setNumber('');
        inputElement.current.focus();
    },[number,list]);

    const avg = useMemo(() => getAverage(list), [list]);
    
    
    return(
        <div>
            <h1>Hooks practice</h1>
            <input 
                value={number} 
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                ref={inputElement}
            />
            <button onClick={handleClick}>register</button>
            <ul>
                {list.map((item,i) => <li key={i}>{item}</li>)}
            </ul>
            <div>average: {avg}</div>
        </div>
    );
}

export default Average;