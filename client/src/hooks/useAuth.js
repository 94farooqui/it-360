import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
  const { user } = useContext(AuthContext);

  return user ? user : <Navigate to="/login" />;
};

export default useAuth;