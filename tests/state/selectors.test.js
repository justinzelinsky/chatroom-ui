import { setCurrentUser } from 'state/actions';
import { currentUser, currentUserInitialState } from 'state/reducers';
import { getUserList, isUserAdmin, isUserAuthenticated } from 'state/selectors';

describe('getUserList selector', function(){
  const allUsers = [
    {
      id: 0,
      name: 'Justin'
    },
    {
      id: 1,
      name: 'Alex'
    }
  ];

  it('should return an empty list at start', function(){
    const state = {
      activeUsers: [],
      allUsers,
      currentUser: null
    };
    const userList = getUserList(state);
    expect(userList).toHaveLength(0);
  });

  it('should return the appropriate list of users with their active state', function () {
    const state = {
      activeUsers: [
        {
          id: 0,
          name: 'Justin'
        }
      ],
      allUsers,
      currentUser: {
        id: 0,
        name: 'Justin'
      }
    };

    const userList = getUserList(state);
    expect(userList).toHaveLength(2);
    expect(userList.find(user => user.name === 'Justin').isSelf).toEqual(true);
    expect(userList.find(user => user.name === 'Alex').isActive).toEqual(false);
  });
});

describe('isUserAuthenticated selector', function() {
  const loggedInUser = {
    admin: true,
    id: 1,
    name: 'Justin'
  };

  it('should return false when not logged in', function() {
    const state = {
      currentUser: currentUser(currentUserInitialState, {})
    };

    const isAuthenticated = isUserAuthenticated(state);
    expect(isAuthenticated).toEqual(false);
  });

  it('should return true when logged in', function() {
    const state = {
      currentUser: currentUser(
        currentUserInitialState,
        setCurrentUser(loggedInUser)
      )
    };

    const isAuthenticated = isUserAuthenticated(state);
    expect(isAuthenticated).toEqual(true);
  });
});

describe('isUserAdmin selector', function() {
  const loggedInUser = {
    admin: true,
    id: 1,
    name: 'Justin'
  };

  const otherUsers = [
    {
      admin: false,
      id: 2,
      name: 'Alex'
    },
    {
      admin: false,
      id: 3,
      name: 'Gene'
    }
  ];

  it('should return false for a non-admin user', function() {
    const state = {
      currentUser: currentUser(
        currentUserInitialState,
        setCurrentUser(otherUsers[0])
      )
    };

    const isAdmin = isUserAdmin(state);
    expect(isAdmin).toEqual(false);
  });

  it('should return true for an admin user', function() {
    const state = {
      currentUser: currentUser(
        currentUserInitialState,
        setCurrentUser(loggedInUser)
      )
    };

    const isAdmin = isUserAdmin(state);
    expect(isAdmin).toEqual(true);
  });
});
