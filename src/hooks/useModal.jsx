import { useState } from 'react';

const useModal = () => {
  const [modalState, setModal] = useState({
    isOpen: false,
    element: null,
  });

  const handleOpen = (uid) => {
    setModal({
      ...modalState,
      isOpen: !modalState.isOpen,
      uid: uid || null,
    });
  };

  return [modalState, handleOpen];
};

export default useModal;
