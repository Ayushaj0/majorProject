import jwt from 'jsonwebtoken';
import { ApiError } from './error.js';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new ApiError(401, 'No authentication token found');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.userId = decoded.id;
    req.userEmail = decoded.email;
    next();
  } catch (error) {
    next(new ApiError(401, 'Invalid token'));
  }
};

export default auth;
