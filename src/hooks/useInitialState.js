import { useState } from 'react';

const useInitialState = () => {
  const [state, setState] = useState({
    isOpen: false,
    element: null,
  });
  // const [open, setOpen] = useState(false);

  const handleModal = (e) => {
    // debugger;
    const element = e.target.id;
    setState({
      ...state,
      element,
      isOpen: true,
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
