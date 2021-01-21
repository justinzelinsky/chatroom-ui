import { createLogic } from 'redux-logic';
import { USER_STOPS_TYPING } from 'state/actions';
import { emitStopTyping } from 'utils/socket';

const userStopsTypingLogic = createLogic({
  type: USER_STOPS_TYPING,
  process ({ getState }, _, done) {
    const { currentUser } = getState();
    emitStopTyping(currentUser);
    done();
  }
});

export default userStopsTypingLogic;
