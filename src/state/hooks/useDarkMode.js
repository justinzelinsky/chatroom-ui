import { useMemo } from 'react';
import { useSelector } from 'react-redux';

function useDarkMode () {
  const darkMode = useSelector(state => state.darkMode);
  const darkModeClass = useMemo(function () {
    return darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return {
    darkMode,
    darkModeClass
  };
}

export default useDarkMode;
