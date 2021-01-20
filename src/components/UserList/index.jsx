import S from 'components/UserList/styled';
import UserStatus from 'components/UserStatus';
import { useSelector } from 'react-redux';
import { getUserList } from 'state/selectors';

function UserList () {
  const userList = useSelector(getUserList);

  return (
    <S.UserList>
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
