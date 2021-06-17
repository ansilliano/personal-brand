/* eslint-disable operator-linebreak */
import React from 'react';
import db from '../db.json';
import ImageLoad from './ImageLoad';

const ModalImg = ({ uid = null, tag = null, keyTag = null }) => {
  let data = null;
  let item = null;

  if (keyTag === 'illus') {
    data = db.illustrations[tag];
    item = data.find((item) => item.uid === uid);
  }

  if (keyTag === 'daily') {
    data = db.dailyUI[tag];
    item = data.find((daily) => daily.uid === uid);
  }

  return (
    <div className='modal-image'>
      {uid && (
        <div>
          <ImageLoad
            alt={item.title}
            src={item.filepath}
            placeholder={item.filepath}
          />
          <p>
            # {item.filename} | {item.title}
          </p>
        </div>
      )}
    </div>
  );
};
export default ModalImg;
