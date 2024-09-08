// middleware/auth.js
import {verifyToken} from './../utils/jwt.js'

export const authMiddleware = (req, res, next) => {
  console.log("In the middleware")
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    //console.log("Token",token)
    const decoded = verifyToken(token);
    console.log("Decoded",decoded)
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
