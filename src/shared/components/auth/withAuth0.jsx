import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import createAuth0Client from '@auth0/auth0-spa-js';

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

export function hookAuth0(WrappedComponent) {
  return function HockComponent(props) {
    const auth0 = useAuth0();
    return <WrappedComponent {...props} auth0={auth0} />;
  };
}

const Auth0Provider = ({
  children,
  onRedirectCallback,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuth = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuth);

      if (isAuth) {
        const currentUser = await auth0FromHook.getUser();
        setUser(currentUser);
      }

      setLoading(false);
    };
    initAuth0();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const currentUser = await auth0Client.getUser();
    setUser(currentUser);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const currentUser = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(currentUser);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p),
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};

Auth0Provider.propTypes = {
  children: PropTypes.node.isRequired,
  onRedirectCallback: PropTypes.func,
};

Auth0Provider.defaultProps = {
  onRedirectCallback: () => window.history.replaceState({}, document.title, window.location.pathname),
};

export default Auth0Provider;
