import { useState } from 'react';

const useInitialState = () => {
  const [state, setState] = useState({
    isOpen: false,
    element: null,
  });
  // const [open, setOpen] = useState(false);

  const handleModal = (e) => {
    const element = e.target;
    setState({
      ...state,
      isOpen: true,
      element,
    });
  };

  const removeModal = () => {
    setState({
      ...state,
      isOpen: false,
      element: null,
    });
  };

  return {
    state,
    handleModal,
    removeModal,
  };
};

export default useInitialState;
