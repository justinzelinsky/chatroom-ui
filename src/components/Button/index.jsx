import { node } from 'prop-types';
import React from 'react';

import { StyledButton } from './styled';

function Button ({ children, ...rest }) {

  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: node.isRequired
};

export default Button;
