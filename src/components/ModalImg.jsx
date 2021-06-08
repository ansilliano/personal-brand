/* eslint-disable operator-linebreak */
import React from 'react';
import db from '../db.json';

const ModalImg = ({ uid = null, tag = null }) => {
  let data = null;
  let item = null;
  if (tag !== null) {
    data = db.dailyUI[tag];
  }
  if (uid !== null) {
    item = data.find((daily) => daily.uid === uid);
  }

  return (
    <div className='modal-image'>
      {uid && (
        <>
          <img src={item.filepath} alt={item.title} />
          <p>
            # {item.filename} | {item.title}
          </p>
        </>
      )}
    </div>
  );
};
export default ModalImg;
