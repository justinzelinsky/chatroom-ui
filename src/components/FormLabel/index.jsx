import { node } from 'prop-types';
import React from 'react';

import { StyledFormLabel } from './styled';

function FormLabel ({ children, ...rest }) {
  return (
    <StyledFormLabel {...rest}>
      {children}
    </StyledFormLabel>
  );
}

FormLabel.propTypes = {
  children: node.isRequired
};

export default FormLabel;

