import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { StyledListGroupItem } from './styled';

function NoChats () {
  const darkMode = useSelector(state => state.darkMode);
  const chatVariant = useMemo(() => darkMode ? 'primary' : 'light', [darkMode]);

  return (
    <StyledListGroupItem variant={chatVariant}>
      No messages!
    </StyledListGroupItem>
  );
}

export default NoChats;
