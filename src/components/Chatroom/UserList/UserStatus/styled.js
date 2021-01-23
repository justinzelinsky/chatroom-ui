import styled from 'styled-components';
import colors from 'styles/colors';

const User = styled.div`
  align-items: center;
  display: flex;
  font-style: italic;
  padding: 15px 0;

  &:first-child {
    padding-top: 5px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.veryLightGrey};
  }
`;

const Status = styled.span`
  background-color: ${colors.silver};
  border-radius: 50%;
  height: 10px;
  margin-right: 5px;
  width: 10px;

  &.is-active {
    background-color: ${colors.pureGreen};
  }
`;

export default {
  Status,
  User
};