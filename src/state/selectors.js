import { createSelector } from 'reselect';

const getCurrentUser = state => state.currentUser;
const getActiveUsers = state => state.activeUsers;
const getAllUsers = state => state.allUsers;

export const getUserList = createSelector(
  getActiveUsers,
  getCurrentUser,
  getAllUsers,
  function (activeUsers, currentUser, allUsers) {
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
);

export const isUserAuthenticated = createSelector(
  getCurrentUser,
  currentUser => currentUser !== null
);

export const isUserAdmin = createSelector(
  getCurrentUser,
  isUserAuthenticated,
  (currentUser, isAuthenticated) => isAuthenticated && !!currentUser.admin
);
