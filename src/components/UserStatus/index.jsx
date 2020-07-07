import classnames from 'classnames';
import S from 'components/UserStatus/styled';
import { bool, string } from 'prop-types';
import React from 'react';

function UserStatus ({ isActive, isSelf, name }) {
  const statusStyle = classnames({ 'is-active': isActive });

  return (
    <S.User>
      <S.Status className={statusStyle}/>
      {name} {isSelf && '(self)'}
    </S.User>
  );
}

UserStatus.propTypes = {
  isActive: bool.isRequired,
  isSelf: bool.isRequired,
  name: string.isRequired
};

export default React.memo(UserStatus);