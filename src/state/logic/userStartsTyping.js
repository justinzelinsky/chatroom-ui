import { createLogic } from 'redux-logic';
import { USER_STARTS_TYPING } from 'state/actions';
import { emitStartTyping } from 'utils/Socket';

const userStartsTypingLogic = createLogic({
  type: USER_STARTS_TYPING,
  process ({ getState }, _, done) {
    const { currentUser } = getState();
    emitStartTyping(currentUser);
    done();
  }
});

export default userStartsTypingLogic;
