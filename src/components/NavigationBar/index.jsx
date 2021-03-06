import { Fragment, useCallback, useMemo, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import actions from 'state/actions';
import useCurrentUser from 'state/hooks/useCurrentUser';
import useDarkMode from 'state/hooks/useDarkMode';

import AboutModal from './AboutModal';
import ThemeToggle from './ThemeToggle';

function NavigationBar () {
  const { darkMode } = useDarkMode();
  const { isAdmin, isAuthenticated } = useCurrentUser();

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [expandMenu, setExpandMenu] = useState(false);

  const handleLogout = useCallback(function () {
    dispatch(actions.logout());
    setExpandMenu(false);
  }, [dispatch]);
  const showAboutModal = useCallback(function () {
    setShowModal(true);
  }, []);
  const hideAboutModal = useCallback(function () {
    setShowModal(false);
    setExpandMenu(false);
  }, []);
  const handleMenuToggle = useCallback(function () {
    setExpandMenu(!expandMenu);
  }, [expandMenu]);

  const goTo = useCallback(function (path) {
    return function () {
      history.push(path);
      setExpandMenu(false);
    };
  }, [history]);

  const isActive = useCallback(function (path) {
    return location.pathname.indexOf(path) !== -1;
  }, [location.pathname]);

  const variant = useMemo(function () {
    return darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <Fragment>
      <Navbar
        bg={variant}
        defaultExpanded={false}
        expand="lg"
        expanded={expandMenu}
        onToggle={handleMenuToggle}
        stick="top"
        variant={variant}
      >
        <Navbar.Brand>
          Chatroom
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="chatroom-navbar-nav" />

        <Navbar.Collapse id="chatroom-navbar-nav">

          <Nav className="mr-auto">
            <Nav.Link onClick={showAboutModal}>
              About
            </Nav.Link>
            <Nav.Link
              active={isActive('playground')}
              onClick={goTo('/playground')}
            >
              Playground
            </Nav.Link>
            {isAuthenticated && (
              <Nav.Link
                active={isActive('chatroom')}
                onClick={goTo('/chatroom')}
              >
                Chatroom
              </Nav.Link>
            )}
            {!isAuthenticated && (
              <Fragment>
                <Nav.Link
                  active={isActive('login')}
                  onClick={goTo('/login')}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  active={isActive('register')}
                  onClick={goTo('/register')}
                >
                  Register
                </Nav.Link>
              </Fragment>
            )}
            {isAdmin && (
              <Nav.Link
                active={isActive('admin')}
                onClick={goTo('/admin')}
              >
                Admin
              </Nav.Link>
            )}
            {isAuthenticated && (
              <Fragment>
                <Nav.Link
                  active={isActive('profile')}
                  onClick={goTo('/profile')}
                >
                  Profile
                </Nav.Link>
                <Nav.Link onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </Fragment>
            )}
          </Nav>

          <ThemeToggle />

        </Navbar.Collapse>
      </Navbar>

      <AboutModal
        darkMode={darkMode}
        handleClose={hideAboutModal}
        show={showModal}
      />

    </Fragment>
  );
}

export default NavigationBar;
