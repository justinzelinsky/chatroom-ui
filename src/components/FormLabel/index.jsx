import S from 'components/FormLabel/styled';
import { node } from 'prop-types';
import React from 'react';

function FormLabel ({ children, ...formLabelProps }) {
  return (
    <S.FormLabel {...formLabelProps}>
      {children}
    </S.FormLabel>
  );
}

FormLabel.propTypes = {
  children: node.isRequired
};

export default FormLabel;

