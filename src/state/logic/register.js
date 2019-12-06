import { createLogic } from 'redux-logic';

import { REGISTER, showNotification } from 'state/actions';

const registerLogic = createLogic({
  type: REGISTER,
  process({ action, post, history }, dispatch, done) {
    post('/api/users/register', action.payload)
      .then(() => history.push('/login'))
      .catch(({ error }) =>
        dispatch(
          showNotification({
            message: error,
            variant: 'danger'
          })
        )
      )
      .finally(() => done());
  }
});

export default registerLogic;
