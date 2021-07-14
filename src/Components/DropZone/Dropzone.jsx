import React, { useRef, useState, useEffect } from 'react';

import axios from 'axios';

import './Dropzone.css';

const Dropzone = () => {
  const [state, setState] = useState(null);
  console.log(state);

  const buttonDelete =
    'https://image.flaticon.com/icons/png/128/1828/1828843.png';

  return (
    <div>
      <label class="file">
        <input
          type="file"
          className="custom-file-input"
          id="input"
          accept="image/*"
          onChange={event =>
            setState(URL.createObjectURL(event.target.files[0]))
          }
          value=""
        />
        <span class="file-custom" />
      </label>

      <img
        className="resume-image"
        id="output"
        style={{ width: '50%' }}
        src={state}
      />
      {state && (
        <button className="delete-button" onClick={event => setState(null)}>
          <img className="delete-icon" src={buttonDelete} />
        </button>
      )}
    </div>
  );
};
export default Dropzone;
