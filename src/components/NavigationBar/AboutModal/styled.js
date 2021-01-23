import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import colors from 'styles/colors';

const StyledModal = styled(Modal)`
  &.dark-mode {
      div.modal-content {
        background-color: ${colors.darkGreyBlue};
        color: ${colors.white};

        button {
          color: ${colors.white};
        }
      }
    }
  }}
`;

export default {
  Modal: StyledModal
};