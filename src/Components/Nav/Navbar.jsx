import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
 

  const [toggleMenu, setToggleMenu] = useState(false);
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setWidthScreen(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <nav>
   
      {(toggleMenu || widthScreen > 500) && (
        <ul className="liste">
          <Link to="/">
            <li className="items">
              <img
                style={{ width: '20px', marginRight: '10px' }}
                src="https://image.flaticon.com/icons/png/128/263/263115.png"
              />
              Accueil
            </li>
          </Link>
          <Link to="ecrire">
            <li className="items">
              <img
                style={{ width: '20px', marginRight: '10px' }}
                src="https://image.flaticon.com/icons/png/128/860/860814.png"
              />
              Ecrire
            </li>
          </Link>
          <Link to="/profile">
            <li className="items">
              <img
                style={{ width: '20px', marginRight: '10px' }}
                src="https://image.flaticon.com/icons/png/128/848/848043.png"
              />
              Profil
            </li>
          </Link>
          <Link to="contact">
            <li className="items">
              <img
                style={{ width: '20px', marginRight: '10px' }}
                src="https://image.flaticon.com/icons/png/128/1034/1034153.png"
              />
              Contact
            </li>
          </Link>
          <Link to="sign">
            <li className="items">
              <img
                style={{ width: '20px', marginRight: '10px' }}
                src="https://image.flaticon.com/icons/png/128/4796/4796392.png"
              />
              Connexion
            </li>
          </Link>
          <Link to="/">
            <li className="items">
              <img
                style={{ width: '20px', marginRight: '10px' }}
                src="https://image.flaticon.com/icons/png/128/157/157075.png"
              />
              Déconnexion
            </li>
          </Link>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        &#9776;
      </button>
    </nav>
  );
}
