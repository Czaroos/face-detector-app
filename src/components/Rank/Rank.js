import React from 'react';

const Rank = ({nickname, entries}) => {
  return (
    <div>
      <div className='near-white f4 f3-l mh2 mt4 mb1'>
        {`${nickname}, your current rank is...`}
      </div>
      <div className='near-white f3 mb5'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;
