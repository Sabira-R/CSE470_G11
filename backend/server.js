import express from 'express';
import cors from 'cors';
import { connect } from './config/db.js';
import dotenv from 'dotenv';

//import routes
import userRoutes from './routes/userRoutes.js'
import jobRoutes from './routes/jobRoutes.js'

dotenv.config();
connect()
const app = express();
const port = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//routes
app.use('/api', userRoutes)
app.use('/jobs', jobRoutes)


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});