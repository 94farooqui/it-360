import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
  const { token } = useContext(AuthContext);

  return token ? token : <Navigate to="/login" />;
};

export default useAuth;