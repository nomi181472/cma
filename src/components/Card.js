import React from 'react';

const Card = ({ className,padding, children }) => {
  console.log(padding)
 return (
  <div
    className={`p-${padding} rounded-lg border border-solid border-gray-200 ${className}`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.08)'
    }}
  >
    {children}
  </div>);
}

export default Card;
