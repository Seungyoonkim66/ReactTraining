import React, { useEffect } from 'react';

const History = ({ history }) => {
    const goBack = () => history.goBack();
    const goHome = () => history.push('/');

    // alert before leave the page
    // useEffect(() => {
    //     console.log(history);
    //     const unblock = history.block("Are you sure to leave this page?");
    //     return () => unblock();
    // },[history]);

    return(
        <div>
            <button onClick={goBack}>Back</button>
            <button onClick={goHome}>Home</button>
        </div>
    );

}
export default History;