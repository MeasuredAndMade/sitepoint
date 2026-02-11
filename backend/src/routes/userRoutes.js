import express from 'express';
import { createUser } from '../controllers/userController.js';
import { updateUser } from '../controllers/updateUser.js';
import { getUsers } from '../controllers/getUsers.js';

const router = express.Router();

router.post('/create-user', createUser);
router.put('/update-user', updateUser);
router.get('/users', getUsers);

export default router;