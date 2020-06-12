import { createLogic } from 'redux-logic';
import { login, REGISTER, showNotification } from 'state/actions';

const registerLogic = createLogic({
  type: REGISTER,
  process: async function ({ action, post }, dispatch, done) {
    try {
      await post('/api/users/register', action.payload);

      const { email, password } = action.payload;
      dispatch(login({ email, password }));
    } catch ({ error }) {
      dispatch(
        showNotification({
          message: error,
          variant: 'danger',
        })
      );
    } finally {
      done();
    }
  },
});

export default registerLogic;
