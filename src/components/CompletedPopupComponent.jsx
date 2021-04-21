import React from 'react';
import Modal from 'react-modal';

//Popup Style
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '500px',
  },
};

const CompletedPopupComponent = ({ children, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => window.location.reload()}
      style={customStyles}
    >
      <h2>Task Completed!</h2>
      {children}
      <button onClick={() => window.location.reload()}>Re-do task</button>
    </Modal>
  );
};

export default CompletedPopupComponent;
