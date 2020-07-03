import styled from 'styled-components';
import colors from 'styles/colors';
import devices from 'styles/devices';

const TabsContainer = styled.div`
  margin: 10px auto;
  width: 50%;

  &.dark-mode {
    nav {
      a {
        color: ${colors.white} !important;

        &[aria-selected='true'] {
          background-color: ${colors.darkGreyBlue};
        }
      }
    }
  }

  @media ${devices.phone} {
    width: 100%;
  }
`;

export {
  TabsContainer
};