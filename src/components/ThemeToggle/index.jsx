import './style.scss';

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'state/actions';

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
    <div styleName="dark-mode-toggle">
      <button
        onClick={disableDarkMode}
        type="button"
      >
        ☀
      </button>
      <span styleName="toggle-control">
        <input
          checked={darkMode}
          id="dmcheck"
          onChange={toggleDarkMode}
          styleName="dmcheck"
          type="checkbox"
        />
        <label htmlFor="dmcheck" />
      </span>
      <button
        onClick={enableDarkMode}
        type="button"
      >
        ☾
      </button>
    </div>
  );
}

export default ThemeToggle;
