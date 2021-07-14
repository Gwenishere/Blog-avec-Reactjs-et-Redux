import React from 'react';

import './Profile.css';

export default function Profile() {
  console.log('coucou de Profile');
  return (
    <div className="profile-container">
      <div className="profile">
        <h2>Prénom Nom</h2>
        <h3 className="profile-email">email</h3>
        <p className="profile-details">détails sur utilisateur, rôle</p>
        <div className="profile-buttons">
          <button className="profile-btn-edit">Modifier le profil</button>
          <button className="profile-btn-delete"  >Supprimer le profil</button>
        </div>
      </div>
    </div>
  );
}
