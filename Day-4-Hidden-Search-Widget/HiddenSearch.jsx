import React, { useRef } from 'react';
import './HiddenSearch.css';

const HiddenSearch = () => {
  const searchRef = useRef(null);
  const btnRef = useRef(null);
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    searchRef.current.classList.toggle('active');
    inputRef.current.focus();
  };

  return (
    <div className="search" ref={searchRef}>
      <input type="text" placeholder="Search..." className="input" ref={inputRef} />
      <button className="btn" onClick={handleButtonClick} ref={btnRef}>
        <i className="fas fa-search" />
      </button>
    </div>
  );
};

export default HiddenSearch;

//is useRef better to get form data than useState?
// Path: HiddenSearch.css


