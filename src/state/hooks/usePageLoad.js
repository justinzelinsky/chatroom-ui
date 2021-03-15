import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'state/actions';

function usePageLoad () {
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(actions.pageLoad());
  }, [dispatch]);
}

export default usePageLoad;
