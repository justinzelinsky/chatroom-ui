import classnames from 'classnames';
import S from 'components/AboutModal/styled';
import { bool, func } from 'prop-types';
import useDarkMode from 'state/hooks/useDarkMode';

function AboutModal ({  handleClose, show }) {
  const { darkModeClass } = useDarkMode();
  const className = classnames('about-modal', darkModeClass);

  return (
    <S.Modal
      centered={true}
      className={className}
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
  handleClose: func.isRequired,
  show: bool.isRequired
};

export default AboutModal;
