import styled, { keyframes } from 'styled-components';
import colors from 'styles/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  animation: ${rotate} 1.4s infinite linear;
  background: ${colors.vividBlue};
  background: linear-gradient(to right, ${colors.vividBlue} 10%, rgba(4, 51, 255, 0) 42%);
  border-radius: 50%;
  font-size: 10px;
  height: 11em;
  margin: 50px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  width: 11em;

  &:before{
    background: ${colors.vividBlue};
    border-radius: 100% 0 0 0;
    content: '';
    height: 50%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
  }

  &:after {
    background: ${colors.white};
    border-radius: 50%;
    bottom: 0;
    content: '';
    height: 75%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 75%;
  }
`;

export default {
  LoadingSpinner
};