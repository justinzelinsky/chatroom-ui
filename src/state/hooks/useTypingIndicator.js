import { useEffect, useState } from 'react';

function useTypingIndicator () {
  const [dots, setDots] = useState('.');

  useEffect(function () {
    const dotProgress = dots.length < 3 ? `${dots}.` : '.';
    const timeoutId = setTimeout(() => setDots(dotProgress), 500);

    return function () {
      clearTimeout(timeoutId);
    };
  }, [dots]);

  return dots;
}

export default useTypingIndicator;