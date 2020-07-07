import classnames from 'classnames';
import S from 'components/AboutModal/styled';
import { bool, func } from 'prop-types';
import React from 'react';

function AboutModal ({ darkMode, handleClose, show }) {
  return (
    <S.Modal
      centered={true}
      className={classnames('about-modal', { 'dark-mode': darkMode })}
      onHide={handleClose}
      show={show}
    >
      <S.Modal.Header closeButton={true}>
        <S.Modal.Title>
          About React-Redux Chatroom
        </S.Modal.Title>
      </S.Modal.Header>
      <S.Modal.Body>
        This is a basic chatroom written using React, Redux, and Socket.IO.
      </S.Modal.Body>
    </S.Modal>
  );
}

AboutModal.propTypes = {
  darkMode: bool.isRequired,
  handleClose: func.isRequired,
  show: bool.isRequired
};

export default AboutModal;
