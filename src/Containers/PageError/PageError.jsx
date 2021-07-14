import React from 'react';
import './PageError.css';

export default function PageError() {
  const errorImage =
    'https://image.flaticon.com/icons/png/128/3798/3798679.png';
  return (
    <div>
      <h2 className="PageError-title">
        <img src={errorImage} /> Page non trouvée, erreur 404
      </h2>
      <h3 className="PageError-text">
        Vous pouvez rester ici et admirer la qualité de l'image ou bien revenir
        vers la page d'accueil
      </h3>
    </div>
  );
}
