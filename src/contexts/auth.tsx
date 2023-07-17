import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSession, getOnlyUser } from '../services/api';

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null | any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    const token = localStorage.getItem('token');
    if (recoveredUser && token) {
      setUser(recoveredUser);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await createSession(email, password);
    const loggedUser = response.data.user;
    const token = response.data.token;
    const dataUser = await getOnlyUser(loggedUser.id);

    localStorage.setItem('user', JSON.stringify(dataUser));
    localStorage.setItem('name', JSON.stringify(dataUser.data.name));
    localStorage.setItem('email', JSON.stringify(dataUser.data.email));
    localStorage.setItem('photo', JSON.stringify(dataUser.data.photo));
    localStorage.setItem('token', token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(dataUser.data);
    navigate('/comunidade');
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.common['Authorization'] = false;

    setUser(null);
    navigate('/login');
  };
  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
