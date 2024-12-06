import express from 'express';
import cors from 'cors';
import { connect } from './config/db';
import dotenv from 'dotenv';

dotenv.config();
connect()
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});