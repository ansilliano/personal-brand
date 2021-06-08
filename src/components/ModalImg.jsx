/* eslint-disable operator-linebreak */
import React from 'react';
import { dailyUI } from '../db.json';

const ModalImg = ({ uid }) => {
  let item = null;
  if (uid !== null) {
    item = dailyUI.mobile.find((daily) => daily.uid === uid);
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
