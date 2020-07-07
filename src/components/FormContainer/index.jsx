import classnames from 'classnames';
import S from 'components/FormContainer/styled';
import { node } from 'prop-types';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

function FormContainer ({ children }) {
  const darkMode = useSelector(state => state.darkMode);
  const darkModeClassname = useMemo(function () {
    return classnames({
      'dark-mode': darkMode
    });
  }, [darkMode]);

  return (
    <S.FormContainer className={darkModeClassname}>
      {children}
    </S.FormContainer>
  );
}

FormContainer.propTypes = {
  children: node.isRequired
};

export default FormContainer;