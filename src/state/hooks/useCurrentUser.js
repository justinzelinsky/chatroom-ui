import { useSelector } from 'react-redux';

function useCurrentUser () {
  const currentUser = useSelector(state => state.currentUser);

  const isAuthenticated = currentUser !== null;
  const isAdmin = isAuthenticated && !!currentUser.admin;

  return {
    isAdmin,
    isAuthenticated
  };
}

export default useCurrentUser;