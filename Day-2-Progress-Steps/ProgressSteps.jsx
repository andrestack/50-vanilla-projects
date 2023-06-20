import React, { useState, useEffect } from 'react';
import './ProgressSteps.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';

const ProgressSteps = () => {
  const [currentActive, setCurrentActive] = useState(1);

  const update = () => {
    const circles = document.querySelectorAll('.circle');
    const progress = document.getElementById('progress');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    circles.forEach((circle, index) => {
      if (index < currentActive) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  };

  useEffect(() => {
    update();
  }, [currentActive]);

  const handlePrevClick = () => {
    setCurrentActive(currentActive - 1);
  };

  const handleNextClick = () => {
    setCurrentActive(currentActive + 1);
  };

  return (
    <div className="container">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className={`circle${num <= currentActive ? ' active' : ''}`}>{num}</div>
        ))}
      </div>

      <button className="btn" id="prev" onClick={handlePrevClick} disabled={currentActive === 1}>
        Prev
      </button>
      <button className="btn" id="next" onClick={handleNextClick} disabled={currentActive === 4}>
        Next
      </button>
    </div>
  );
};

export default ProgressSteps;
