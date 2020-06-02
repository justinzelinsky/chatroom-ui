import './style.scss';

import classnames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUserList } from 'state/selectors';

function UserList () {
  const userList = useSelector(getUserList);
  return (
    <div styleName="user-list-container">
      <div styleName="user-list">
        {userList.map(function ({ isActive, isSelf, name }, idx) {
          const statusStyle = classnames('status', { 'is-active': isActive });
          return (
            <div
              key={idx}
              styleName="user"
            >
              <span styleName={statusStyle}/>
              {name} {isSelf && '(self)'}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
