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
      {userList.map(({ isActive, isSelf, name }, idx) => (
        <UserStatus
          isActive={isActive}
          isSelf={isSelf}
          key={idx}
          name={name}
        />
      ))}
    </S.UserList>
  );
}

export default UserList;
