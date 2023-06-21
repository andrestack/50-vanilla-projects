import React, { useState} from 'react';
import './RotatingNavigation.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';

const RotatingNavigation = () => {
  const [showNav, setShowNav] = useState(false);

  const handleCloseClick = () => {
    setShowNav(false);
  };

  const handleOpenClick = () => {
    setShowNav(true);
  };

 

  return (
    <div className="container">
      <div className="circle-container">
        <div className="circle">
          <button id="close" onClick={handleCloseClick}>
            <i className="fas fa-times"></i>
          </button>
          <button id="open" onClick={handleOpenClick}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <div className="content">
        <h1>Amazing Text</h1>
        <small>Florin Pop</small>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et
          animi ex suscipit doloremque rem? Accusantium incidunt consectetur et
          ut possimus corrupti minus nulla assumenda error nam optio esse ipsa,
          architecto ratione officiis dolor. Sequi minus officia iusto
          reprehenderit, veniam eos suscipit natus, reiciendis laboriosam ex
          cumque? Placeat, eius deleniti ipsa quam quos at dolorem dolor ducimus
          veritatis nemo minus architecto magnam illo numquam totam unde quidem
          quaerat nisi explicabo, pariatur labore? Repellendus similique neque
          omnis totam in voluptatibus voluptatum dolorem id libero qui nam dolor
          mollitia, vel soluta hic doloremque ut quas aliquam beatae nemo quo.
          Dolor, impedit facere?
        </p>

        <h3>My Dog</h3>
        <img
          src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          alt="doggy"
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          ullam! Quaerat, vel perferendis commodi quis hic exercitationem
          cupiditate non neque ab doloribus ex architecto quo, necessitatibus
          recusandae culpa? Quo dolore voluptatum explicabo eveniet, totam
          exercitationem voluptatibus! Tenetur iste consectetur laudantium enim
          possimus blanditiis fugiat repellendus molestiae harum, exercitationem
          architecto fuga quibusdam amet ipsa culpa perferendis voluptates
          placeat eaque, beatae quas eveniet! Ab deserunt vel laboriosam
          distinctio, consequatur, totam placeat commodi dolore cum ad dicta?
          Numquam dolor possimus fugiat, commodi mollitia alias omnis enim magni
          corporis laudantium fugit, voluptas error! Quae ullam minima quaerat
          placeat architecto corporis incidunt voluptate, nisi eveniet!
        </p>
      </div>

      {showNav && (
        <nav>
          <ul>
            <li>
              <i className="fas fa-home"></i>Home
            </li>
            <li>
              <i className="fas fa-user-alt"></i>About
            </li>
            <li>
              <i className="fas fa-envelope"></i>Contact
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default RotatingNavigation;
