import React, { useState } from 'react';
import './style.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';

const SplitLandingPage = () => {
  const [hoverState, setHoverState] = useState('');

  const handleMouseEnter = (side) => {
    setHoverState(`hover-${side}`);
  }

  const handleMouseLeave = () => {
    setHoverState('');
  }

  return (
    <div className={`container ${hoverState}`}>
      <div 
        className='split left' 
        onMouseEnter={() => handleMouseEnter('left')} 
        onMouseLeave={handleMouseLeave}
      >
        <h1>PlayStation 5</h1>
        <a href="#" className="btn">Buy Now</a>
      </div>
      <div 
        className='split right' 
        onMouseEnter={() => handleMouseEnter('right')} 
        onMouseLeave={handleMouseLeave}
      >
        <h1>Xbox Series X</h1>
        <a href="#" className="btn">Buy Now</a>
      </div>
    </div>
  );
}

export default SplitLandingPage;
