import S from 'components/ChatInput/styled';
import Button from 'components/UI/Button';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'state/actions';
import useDarkMode from 'state/hooks/useDarkMode';

function ChatInput () {
  const currentUser = useSelector(state => state.currentUser);
  const { darkModeClass } = useDarkMode();
  const dispatch = useDispatch();
  const [timeoutId, setTimeoutId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState('');

  const onChange = useCallback(function (event) {
    setMessage(event.target.value);
  }, [setMessage]);

  const sendMessage = useCallback(function () {
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

      const newTimeoutId = setTimeout(function () {
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

  const handleSendClick = useCallback(function () {
    sendMessage();
  } , [sendMessage]);

  return (
    <S.ChatInput
      autoComplete="off"
      className={darkModeClass}
      onSubmit={handleOnSubmit}
    >
      <S.InputWrapper>
        <S.UserName>
          {currentUser.name}
        </S.UserName>
        <S.MessageInput
          autoFocus={true}
          className={darkModeClass}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Type your message..."
          type="text"
          value={message}
        />
      </S.InputWrapper>
      <Button
        block={true}
        onClick={handleSendClick}
        variant="primary"
      >
        Send
      </Button>
    </S.ChatInput>
  );
}

export default ChatInput;
