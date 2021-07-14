import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Form.css';

/*import DropZone from '../DropZone/Dropzone';*/

export default function Form() {
  const [article, setArticle] = useState({
    title: '',
    body: ''
  });

  const dispatch = useDispatch();


  const handleForm = e => {
    e.preventDefault();
    dispatch({
      type: 'ADDARTICLE',
      payload: article
    });
    setArticle({
      title: '',
      body: ''
    });
  };

  const handleInputs = e => {
    console.log('coucou de handleInputs');
    if (e.target.classList.contains('input-title')) {
      const newObjState = { ...article, title: e.target.value };
      setArticle(newObjState);
    } else if (e.target.classList.contains('input-body')) {
      const newObjState = { ...article, body: e.target.value };
      setArticle(newObjState);
    } 
  };
  console.log(article);
  return (
    <>
      <h2 className="title-form">Ecrivez un article</h2>
      <form onSubmit={handleForm} className="container-form">
        <label htmlFor="title">Titre</label>
        <input
          onChange={handleInputs}
          value={article.title}
          className="input-title"
          type="text"
          id="title"
          required
          placeholder="Donnez un titre..."
        />
        <label htmlFor="article">Contenu</label>
        <textarea
          onChange={handleInputs}
          value={article.body}
          className="input-body"
          id="article"
          required
          placeholder="Que voulez-vous dire ?"
        />

        <button>Publier</button>
      </form>
    </>
  );
}
