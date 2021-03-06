import { useSelector } from 'react-redux';

function useUserList () {
  const { activeUsers, currentUser, allUsers } = useSelector(state => ({
    activeUsers: state.activeUsers,
    currentUser: state.currentUser,
    allUsers: state.allUsers
  }));

  if (!currentUser || activeUsers.length === 0) {
    return [];
  }
  const allUserList = allUsers.map(user => {
    const isSelf = user.id === currentUser.id;
    const isActive = activeUsers.some(
      activeUser => activeUser.id === user.id
    );
    return {
      id: user.id,
      isActive,
      isSelf,
      name: user.name
    };
  });
  const loggedInUser = allUserList.find(user => user.id === currentUser.id);
  if (!loggedInUser) {
    return [];
  }
  const otherUsers = allUserList.filter(user => user.id !== currentUser.id);
  return [loggedInUser, ...otherUsers];
}

export default useUserList;
