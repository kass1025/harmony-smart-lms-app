import express from 'express';
import upload from '../configs/multer.js';
import { addCourse, updateRoleToEducator } from '../controllers/educatorController.js';
import { protectEducator } from '../middlewares/authMiddleware.js';

const educatorRouter = express.Router();

//Add Educator role
educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/add-course', upload.single('image'), 
protectEducator, addCourse);

export default educatorRouter;

//