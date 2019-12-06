import { createLogic } from 'redux-logic';

import { login, REGISTER, showNotification } from 'state/actions';

const registerLogic = createLogic({
  type: REGISTER,
  process({ action, post }, dispatch, done) {
    post('/api/users/register', action.payload)
      .then(() => {
        const { email, password } = action.payload;
        dispatch(login({ email, password }));
      })
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
