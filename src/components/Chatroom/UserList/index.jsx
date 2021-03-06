import useDarkMode from 'state/hooks/useDarkMode';
import useUserList from 'state/hooks/useUserList';

import S from './styled';
import UserStatus from './UserStatus';

function UserList () {
  const userList = useUserList();
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
