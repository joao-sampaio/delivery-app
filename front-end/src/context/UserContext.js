import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import { getUser } from '../service/requests';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({ user: {
    id: 0,
    name: '',
    email: '',
    role: '',
  } });
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      getUser().then((response) => setUser(response.data));
    }
  }, []);

  const value = useMemo(() => ({
    user, isAuthenticated,
  }), [user, isAuthenticated]);

  return (
    <UserContext.Provider value={ value }>
      { children }
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
