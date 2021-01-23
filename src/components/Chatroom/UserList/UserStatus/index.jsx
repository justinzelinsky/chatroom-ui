import classnames from 'classnames';
import { bool, shape, string } from 'prop-types';
import { memo } from 'react';

import S from './styled';

function UserStatus ({ user }) {
  const { isActive, isSelf, name } = user;
  const statusStyle = classnames({ 'is-active': isActive });

  return (
    <S.User>
      <S.Status className={statusStyle}/>
      {name} {isSelf && '(self)'}
    </S.User>
  );
}

UserStatus.propTypes = {
  user: shape({
    isActive: bool.isRequired,
    isSelf: bool.isRequired,
    name: string.isRequired
  }).isRequired
};

export default memo(UserStatus);