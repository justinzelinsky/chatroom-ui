import S from 'components/ThemeToggle/styled';
import { useCallback } from 'react';
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
