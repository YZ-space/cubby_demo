import React from 'react';
import { useLocation } from 'react-router-dom';
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
  const currentURL = useLocation().pathname;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => window.location.reload()}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className='copy-container'>
        <div className='copy-body'>
          <h2>Task Completed!</h2>
          {children}
        </div>
        <div className='copy-buttons'>
          <button
            className='secondary-btn'
            onClick={() => window.location.reload()}
          >
            Re-do task
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CompletedPopupComponent;
