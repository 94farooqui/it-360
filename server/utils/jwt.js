// utils/jwt.js

import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'your-secret-key';

export const generateToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, secret, {
    expiresIn: '1h',
  });
};

export const verifyToken =  (token) => {
  console.log("Received token", token)
  const result =  jwt.verify(token, secret);
  console.log("verifying token", result)
  return result
};


