import React from 'react';
import './button.css';

interface ButtonProps {
  color?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="btn" style={{ color: props.color }}>
      {props.children}
    </button>
  );
};
