import classnames from 'classnames';
import { bool, func } from 'prop-types';
import React from 'react';

import { StyledModal } from './styled';

function AboutModal ({ darkMode, show, handleClose }) {
  return (
    <StyledModal
      centered={true}
      className={classnames('about-modal', { 'dark-mode': darkMode })}
      onHide={handleClose}
      show={show}>
      <StyledModal.Header closeButton={true}>
        <StyledModal.Title>
          About React-Redux Chatroom
        </StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        This is a basic chatroom written using React, Redux, and Socket.IO.
      </StyledModal.Body>
    </StyledModal>
  );
}

AboutModal.propTypes = {
  darkMode: bool.isRequired,
  handleClose: func.isRequired,
  show: bool.isRequired
};

export default AboutModal;
