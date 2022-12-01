import express from 'express';
import  {user}  from '../controllers/auth.js';

const router = express.Router();

router.post('/login', user);

export default router;