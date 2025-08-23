import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectCloudinary from './configs/cloudinary.js';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js';
import courseRouter from './routes/courseRouter.js';
import educatorRouter from './routes/educatorRouter.js';
import userRouter from './routes/userRouter.js';

// Initialize express
const app = express();

//Connect to database
await connectDB();
await connectCloudinary();

// Middlewares 
app.use(cors())
app.use(clerkMiddleware())

//Routes
app.get('/', (req, res)=>{res.send('API Working')});

app.post('/clerk', express.json(), clerkWebhooks)

app.use('/api/educator', express.json(), educatorRouter);
app.use('/api/course', express.json(), courseRouter);
app.use('/api/user', express.json(), userRouter);
app.use('/stripe', express.raw({type:'application/json'}), stripeWebhooks)

//Port
const PORT = process.env.PORT || 5000

//Listener
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});