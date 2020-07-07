import S from 'components/Form/styled';
import { node } from 'prop-types';
import React from 'react';

function Form ({ children, ...formProps }) {
  return (
    <S.Form {...formProps}>
      {children}
    </S.Form>
  );
}

Form.propTypes = {
  children: node.isRequired
};

export default Form;