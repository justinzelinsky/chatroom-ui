import { node } from 'prop-types';
import React from 'react';

import { StyledForm } from './styled';

function Form ({ children, ...rest }) {
  return (
    <StyledForm {...rest}>
      {children}
    </StyledForm>
  );
}

Form.propTypes = {
  children: node.isRequired
};

export default Form;