import './style.scss';

import classnames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'state/actions';

function ChatInput() {
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

  const onKeyDown = useCallback(function(event) {
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
      setTimeoutId(
        setTimeout(() => {
          setIsTyping(false);
          dispatch(actions.userStopsTyping());
        }, 500)
      );
    }
  }, [dispatch, isTyping, sendMessage, timeoutId]);

  const handleOnSubmit = useCallback(function(event) {
    event.preventDefault();
    sendMessage();
  }, [sendMessage]);

  const handleSendClick = useCallback(() => sendMessage(), [sendMessage]);

  const chatInputClassname = useMemo(
    () => classnames('chat-input-container', {
      'dark-mode': darkMode
    }),
    [darkMode]
  );

  return (
    <Form
      autoComplete="off"
      onSubmit={handleOnSubmit}
      styleName={chatInputClassname}>
      <Form.Group controlId="message" styleName="chat-input-group">
        <Form.Label styleName="username-display">{currentUser.name}</Form.Label>
        <Form.Control
          autoFocus={true}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Type your message..."
          type="text"
          value={message}
        />
      </Form.Group>
      <Button
        block={true}
        onClick={handleSendClick}
        styleName="send-button"
        variant="primary">
        Send
      </Button>
    </Form>
  );
}

export default ChatInput;
