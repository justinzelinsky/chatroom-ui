import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'state/actions';
import useDarkMode from 'state/hooks/useDarkMode';

import S from './styled';

function ThemeToggle () {
  const { darkMode } = useDarkMode();
  const dispatch = useDispatch();

  const toggleDarkMode = useCallback(function () {
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    dispatch(actions.setDarkMode(!darkMode));
  }, [darkMode, dispatch]);

  const disableDarkMode = useCallback(function () {
    dispatch(actions.setDarkMode(false));
  }, [dispatch]);

  const enableDarkMode = useCallback(function () {
    dispatch(actions.setDarkMode(true));
  }, [dispatch]);

  return (
    <S.ThemeToggle>
      <S.Button
        onClick={disableDarkMode}
        type="button"
      >
        ☀
      </S.Button>
      <S.ToggleControl>
        <S.Input
          checked={darkMode}
          id="dmcheck"
          onChange={toggleDarkMode}
          type="checkbox"
        />
        <S.Label htmlFor="dmcheck" />
      </S.ToggleControl>
      <S.Button
        className="moon"
        onClick={enableDarkMode}
        type="button"
      >
        ☾
      </S.Button>
    </S.ThemeToggle>
  );
}

export default ThemeToggle;
