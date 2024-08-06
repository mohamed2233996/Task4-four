import React from 'react';

const Child = (props) => {
    return (
        <>
            <div className='child'>
                <h1>Child Component</h1>
                <p>{props.text}</p>
            </div>
        </>
    );
}

export default Child;
