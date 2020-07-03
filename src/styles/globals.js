import { createGlobalStyle } from 'styled-components';
import colors from 'styles/colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    &.dark-mode {
      background-color: ${colors.veryDarkGreyBlack};
      color: ${colors.veryLightGrey};
    }
  }
`;

export {
  GlobalStyle
};