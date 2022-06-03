import React from 'react';
const Button = ({ children, color }) => {
    return (React.createElement("button", { style: { backgroundColor: color, padding: '2rem' } }, children));
};
export default Button;
