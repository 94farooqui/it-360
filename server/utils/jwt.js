// utils/jwt.js

import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'your-secret-key';

export const generateToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, secret, {
    expiresIn: '1h',
  });
};

export const verifyToken = (token) => {
  
  return jwt.verify(token, secret);
};


