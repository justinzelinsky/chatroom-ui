import S from 'components/Button/styled';
import { node } from 'prop-types';
import React from 'react';

function Button ({ children, ...buttonProps }) {
  return (
    <S.Button {...buttonProps}>
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  children: node.isRequired
};

export default Button;
