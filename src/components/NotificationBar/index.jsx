import S from 'components/NotificationBar/styled';
import { useSelector } from 'react-redux';

function NotificationBar () {
  const notification = useSelector(state => state.notification);

  if (notification) {
    return (
      <S.Alert variant={notification.variant}>
        {notification.message}
      </S.Alert>
    );
  }

  return null;
}

export default NotificationBar;
