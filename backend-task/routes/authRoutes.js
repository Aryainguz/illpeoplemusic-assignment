import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';
import { getUser, updateUser } from '../controllers/user.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/profile', protect,getUser);

router.put('/profile', protect,updateUser);

export default router;
