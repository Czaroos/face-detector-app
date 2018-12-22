import React from 'react';
import Tilt from 'react-tilt';
import GoButton from './go.svg';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className='tc f3 near-white'>
        {'This will detect faces in your picture. Give it a try.'}
      </p>
      <div className='center'>
        <button className='mt3 h2 f6 f5-m link ba br2 b--silver bg-transparent near-white grow mr3' type='text'>Paste URL</button>
        <input id="imageUrlInput" className='mt3 h2 f6 w-50 pl2 ba br3 b--silver bg-transparent near-white' type='text' onChange={onInputChange}/>
        <div className='ml3 dim pointer' onClick={onSubmit}>
          <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 64, width: 64 }} >
            <div className="Tilt-inner">
              <img src={GoButton} alt='Go'/>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
