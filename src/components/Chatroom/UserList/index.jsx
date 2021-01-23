import { useSelector } from 'react-redux';
import useDarkMode from 'state/hooks/useDarkMode';
import { getUserList } from 'state/selectors';

import S from './styled';
import UserStatus from './UserStatus';

function UserList () {
  const userList = useSelector(getUserList);
  const { darkModeClass } = useDarkMode();

  return (
    <S.UserList className={darkModeClass}>
      {userList.map((user, idx) => (
        <UserStatus
          key={idx}
          user={user}
        />
      ))}
    </S.UserList>
  );
}

export default UserList;
