import React from 'react';

interface Props {
  children: React.ReactNode;
  color: string;
}

const Button = ({ children, color }: Props) => {
    return (
      <button style={{backgroundColor: color, padding: '2rem'}}>{children}</button>
    );
}

export default Button;