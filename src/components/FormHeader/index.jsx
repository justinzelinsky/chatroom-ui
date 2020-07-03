import { node } from 'prop-types';
import React from 'react';

import { StyledFormHeader } from './styled';

function FormContainer ({ children }) {
  return (
    <StyledFormHeader>
      {children}
    </StyledFormHeader>
  );
}

FormContainer.propTypes = {
  children: node.isRequired
};

export default FormContainer;