import styled from 'styled-components';
import devices from 'styles/devices';

const UserList = styled.div`
  min-width: 250px;
  padding: 10px;

  @media ${devices.phone} {
    display: none;
  }
`;

export default {
  UserList
};
