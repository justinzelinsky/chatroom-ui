import React from 'react';
import { useSelector } from 'react-redux';

import { StyledAlert } from './styled';

function NotificationBar () {
  const notification = useSelector(state => state.notification);

  if (notification) {
    return (
      <StyledAlert variant={notification.variant}>
        {notification.message}
      </StyledAlert>
    );
  }

  return null;
}

export default NotificationBar;
