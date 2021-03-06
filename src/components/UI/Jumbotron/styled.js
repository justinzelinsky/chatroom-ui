import styled from 'styled-components';
import colors from 'styles/colors';
import devices from 'styles/devices';

const Jumbotron = styled.div`
  background-color: ${colors.veryLightGrey};
  border-radius: .3rem;
  margin: 20px auto;
  padding: 4rem 2rem;
  width: 50%;

  @media ${devices.phone} {
    margin: 20px 0;
    width: 100%;
  }

  &.dark-mode {
    background-color: ${colors.darkGreyBlue};
    color: ${colors.white};

    button {
      color: ${colors.white};
    }
  }
`;

export default { Jumbotron };