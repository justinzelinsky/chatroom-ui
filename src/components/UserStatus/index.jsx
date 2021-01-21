import classnames from 'classnames';
import S from 'components/UserStatus/styled';
import { bool, shape, string } from 'prop-types';
import { memo } from 'react';

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