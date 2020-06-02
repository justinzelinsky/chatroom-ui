import { createLogic } from 'redux-logic';
import { login, REGISTER, showNotification } from 'state/actions';

const registerLogic = createLogic({
  type: REGISTER,
  process ({ action, post }, dispatch, done) {
    post('/api/users/register', action.payload)
      .then(function () {
        const { email, password } = action.payload;
        dispatch(login({ email, password }));
      })
      .catch(function ({ error }) {
        dispatch(
          showNotification({
            message: error,
            variant: 'danger'
          })
        );
      })
      .finally(function () {
        done();
      });
  }
});

export default registerLogic;
