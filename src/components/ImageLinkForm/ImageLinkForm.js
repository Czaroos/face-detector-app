import React from 'react';

const ImageLinkForm = () => {
  return (
    <div>
      <p className='tc f3 near-white'>
        {'This will detect faces in your picture. Give it a try.'}
      </p>
      <div className='center h2'>
        <button className='f5 link ba br2 b--silver bg-transparent near-white grow mr3' type='text'>Paste URL</button>
        <input className='f6 w-50 ba br3 b--silver bg-transparent near-white' type='text' />
        <button className='f3 ph3 link ba br2 b--white-10 bg-transparent near-white ml3 grow'>Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm;
