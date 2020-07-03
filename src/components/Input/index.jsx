import classnames from 'classnames';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { StyledInput } from './styled';

function Input (props) {
  const darkMode = useSelector(state => state.darkMode);
  const darkModeClassname = useMemo(() => classnames({
    'dark-mode': darkMode
  }), [darkMode]);

  return (
    <StyledInput
      className={darkModeClassname}
      {...props}
    />
  );
}

export default Input;