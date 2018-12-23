import React from 'react';
import Tilt from 'react-tilt';
import GoButton from './go.svg';

const ImageLinkForm = ({ onSubmit, onInputChange, clearPage }) => {
  return (
    <div>
      <p className='tc f4 f3-l near-white'>
        {'This will detect faces in your picture. Give it a try.'}
      </p>
      <div className='center'>
        <p className='tc mt3 w-15 h2 ph2 pt1 f5 link ba br2 b--silver bg-transparent near-white grow mr3 pointer' onClick={clearPage}>Clear</p>
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
