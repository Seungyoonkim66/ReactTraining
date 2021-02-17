import React, { useState } from 'react';

const Iteration = () => {
    const [seasons, setSeasons] = useState([
        { id: 1, name: 'spring' },
        { id: 2, name: 'summer' },
        { id: 3, name: 'fall' },
        { id: 4, name: 'winter' }
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    
    const handleChange = e => setInputText(e.target.value);
    const handleClick = () => {
        const newList = seasons.concat({
            id: nextId,
            name: inputText
        });
        setNextId(nextId+1);
        setSeasons(newList);
        setInputText('');
    }
    const handleDelete = id => {
        const newList = seasons.filter(season => season.id !== id);
        setSeasons(newList);
    };

    const seasonList = seasons.map((season) => 
        <div key={season.id}>
            <li><button onClick={() => handleDelete(season.id)}>delete</button> {season.name}</li>
        </div>
    );

    return (
        <>
            <h1>List Add and Delete</h1>
            <ul>{seasonList}</ul>
            <input 
                value={inputText}
                onChange={handleChange}
            />
            <button onClick={handleClick}>add</button>

        </>
    );
}

export default Iteration;