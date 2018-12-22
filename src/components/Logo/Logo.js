import React from 'react';
import Tilt from 'react-tilt';
import LogoImage from './face-detection.svg';

const Logo = () => {
  return (
    <div className='ma4 mt0 absolute top-1'>
      <Tilt className="Tilt shadow-4" options={{ max : 35 }} style={{ height: 80, width: 80 }} >
        <div className="Tilt-inner pa2">
          <img src={LogoImage} alt='logo'/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
