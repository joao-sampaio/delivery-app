import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
      setIsAuthenticated(true);
    }
  }, []);

  const value = useMemo(() => ({
    isAuthenticated,
  }), [isAuthenticated]);

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
