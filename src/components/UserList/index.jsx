import S from 'components/UserList/styled';
import UserStatus from 'components/UserStatus';
import { useSelector } from 'react-redux';
import useDarkMode from 'state/hooks/useDarkMode';
import { getUserList } from 'state/selectors';

function UserList () {
  const userList = useSelector(getUserList);
  const { darkModeClass } = useDarkMode();

  return (
    <S.UserList className={darkModeClass}>
      {userList.map((user, idx) => (
        <UserStatus
          user={user}
          key={idx}
        />
      ))}
    </S.UserList>
  );
}

export default UserList;
