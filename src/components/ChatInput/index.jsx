import classnames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'state/actions';

import {
  StyledButton,
  StyledForm,
  StyledFormGroup,
  StyledFormLabel,
  StyledInput
} from './styled';

function ChatInput () {
  const { currentUser, darkMode } = useSelector(state => ({
    currentUser: state.currentUser,
    darkMode: state.darkMode
  }));
  const dispatch = useDispatch();
  const [timeoutId, setTimeoutId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');

  const onChange = useCallback(event => setMessage(event.target.value), [setMessage]);

  const sendMessage = useCallback(() => {
    if (message) {
      const ts = new Date().valueOf();
      dispatch(actions.addChat({ message, ts, user: currentUser }));
      setMessage('');
    }
  }, [currentUser, dispatch, message, setMessage]);

  const onKeyDown = useCallback(function (event) {
    clearTimeout(timeoutId);

    if (event.key === 'Enter') {
      sendMessage();
      setIsTyping(false);
      dispatch(actions.userStopsTyping());
    } else {
      if (!isTyping) {
        setIsTyping(true);
        dispatch(actions.userStartsTyping());
      }

      const newTimeoutId = setTimeout(() => {
        setIsTyping(false);
        dispatch(actions.userStopsTyping());
      }, 500);

      setTimeoutId(newTimeoutId);
    }
  }, [dispatch, isTyping, sendMessage, timeoutId]);

  const handleOnSubmit = useCallback(function (event) {
    event.preventDefault();
    sendMessage();
  }, [sendMessage]);

  const handleSendClick = useCallback(() => sendMessage(), [sendMessage]);

  const darkModeClass = useMemo(
    () => classnames({
      'dark-mode': darkMode
    }),
    [darkMode]
  );

  return (
    <StyledForm
      autoComplete="off"
      onSubmit={handleOnSubmit}
      className={darkModeClass}>
      <StyledFormGroup controlId="message">
        <StyledFormLabel>
          {currentUser.name}
        </StyledFormLabel>
        <StyledInput
          autoFocus={true}
          className={darkModeClass}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Type your message..."
          type="text"
          value={message}
        />
      </StyledFormGroup>
      <StyledButton
        block={true}
        onClick={handleSendClick}
        variant="primary">
        Send
      </StyledButton>
    </StyledForm>
  );
}

export default ChatInput;
