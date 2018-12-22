import React from 'react';
import Tilt from 'react-tilt';
import GoButton from './go.svg';

const ImageLinkForm = () => {
  return (
    <div>
      <p className='tc f3 near-white'>
        {'This will detect faces in your picture. Give it a try.'}
      </p>
      <div className='center'>
        <button className='mt3 h2 f5 link ba br2 b--silver bg-transparent near-white grow mr3' type='text'>Paste URL</button>
        <input className='mt3 h2 f6 w-50 ba br3 b--silver bg-transparent near-white' type='text' />
        <div className='ml3 dim pointer'>
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
