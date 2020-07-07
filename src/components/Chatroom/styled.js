import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  padding: 0;
`;

const ChatsUserListContainer = styled.div`
  display: flex;
`;

export default {
  Container: StyledContainer,
  ChatsUserListContainer,
};