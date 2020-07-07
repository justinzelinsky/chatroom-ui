import S from 'components/FormHeader/styled';
import { node } from 'prop-types';
import React from 'react';

function FormHeader ({ children }) {
  return (
    <S.FormHeader>
      {children}
    </S.FormHeader>
  );
}

FormHeader.propTypes = {
  children: node.isRequired
};

export default FormHeader;