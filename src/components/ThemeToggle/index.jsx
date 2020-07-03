import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'state/actions';

import {
  Button,
  DarkModeToggle,
  Input,
  Label,
  ToggleControl
} from './styled';

function ThemeToggle () {
  const darkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = useCallback(function () {
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    dispatch(actions.setDarkMode(!darkMode));
  }, [darkMode, dispatch]);

  const disableDarkMode = useCallback(() => dispatch(actions.setDarkMode(false)), [dispatch]);
  const enableDarkMode = useCallback(() => dispatch(actions.setDarkMode(true)), [dispatch]);

  return (
    <DarkModeToggle>
      <Button
        onClick={disableDarkMode}
        type="button"
      >
        ☀
      </Button>
      <ToggleControl>
        <Input
          checked={darkMode}
          id="dmcheck"
          onChange={toggleDarkMode}
          type="checkbox"
        />
        <Label htmlFor="dmcheck" />
      </ToggleControl>
      <Button
        className="moon"
        onClick={enableDarkMode}
        type="button"
      >
        ☾
      </Button>
    </DarkModeToggle>
  );
}

export default ThemeToggle;
