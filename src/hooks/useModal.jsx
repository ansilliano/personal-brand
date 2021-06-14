import { useState } from 'react';

const useModal = () => {
  const [modalState, setModal] = useState({
    isOpen: false,
    uid: null,
    tag: null,
  });

  const handleOpen = (uid, tag = null) => {
    setModal({
      ...modalState,
      isOpen: !modalState.isOpen,
      uid: uid || null,
      tag: tag || null,
    });
  };

  return [modalState, handleOpen];
};

export default useModal;
