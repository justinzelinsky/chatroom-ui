import React, { useMemo } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

function NoChats () {
  const darkMode = useSelector(state => state.darkMode);
  const chatVariant = useMemo(() => darkMode ? 'primary' : 'light', [darkMode]);

  return (
    <ListGroup.Item variant={chatVariant}>
    No messages!
    </ListGroup.Item>
  );
}

export default NoChats;
