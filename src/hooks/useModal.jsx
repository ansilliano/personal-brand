import { doc } from 'prettier';
import React, { useRef, useEffect } from 'react';

function createRootElement(id) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElement) {
  document.body.insertBefore(
    rootElement,
    document.body.lastElementChild.nextElementSibling
  );
}

const useModal = (id) => {
  const rootElementRef = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);

    const parentElement = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElement);
    }

    parentElement.appendChild(rootElementRef.current);

    return function removeElement() {
      rootElementRef.current.remove();
      if (!parentElement.childElementCount) {
        parentElement.remove();
      }
    };
  }, [id]);

  function getRootElem() {
    if (!rootElementRef.current) {
      rootElementRef.current = document.createElement('div');
    }
    return rootElementRef.current;
  }

  return getRootElem();
};

export default useModal;
