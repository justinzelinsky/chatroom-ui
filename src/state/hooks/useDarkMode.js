import classnames from 'classnames';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

function useDarkMode () {
  const darkMode = useSelector(state => state.darkMode);
  const darkModeClass = useMemo(function () {
    return classnames({ 'dark-mode': darkMode });
  }, [darkMode]);

  return {
    darkMode,
    darkModeClass
  };
}

export default useDarkMode;
