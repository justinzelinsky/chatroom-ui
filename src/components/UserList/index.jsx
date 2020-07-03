import classnames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUserList } from 'state/selectors';

import  {
  StyledUserList,
  User,
  UserStatus
} from './styled';

function UserList () {
  const userList = useSelector(getUserList);
  return (
    <StyledUserList>
      {userList.map(function ({ isActive, isSelf, name }, idx) {
        const statusStyle = classnames({ 'is-active': isActive });
        return (
          <User key={idx}>
            <UserStatus className={statusStyle}/>
            {name} {isSelf && '(self)'}
          </User>
        );
      })}
    </StyledUserList>
  );
}

export default UserList;
