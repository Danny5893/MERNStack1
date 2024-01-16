import React from 'react';

// Functional component SuccessStory
const SuccessStory = ({ randomValue }) => {
    randomValue = "random Value pass from SuccessStory"
    return (
        <div>
        <p>Success Story: {randomValue}</p>
        </div>
    );
};

export default SuccessStory