import { useEffect, useRef } from 'react';

function useScrollRef () {
  const chatEndRef = useRef(null);

  useEffect(function () {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return chatEndRef;
}

export default useScrollRef;