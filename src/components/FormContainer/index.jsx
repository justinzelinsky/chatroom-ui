import classnames from 'classnames';
import { node } from 'prop-types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { StyledFormContainer } from './styled';

function FormContainer ({ children }) {
  const darkMode = useSelector(state => state.darkMode);
  const darkModeClassname = useMemo(() => classnames({
    'dark-mode': darkMode
  }), [darkMode]);

  return (
    <StyledFormContainer className={darkModeClassname}>
      {children}
    </StyledFormContainer>
  );
}

FormContainer.propTypes = {
  children: node.isRequired
};

export default FormContainer;