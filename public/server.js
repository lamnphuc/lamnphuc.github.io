import express from 'express';
import dotenv from 'dotenv';

//Load variable 
dotenv.config();
//Start Server
const app = express();
app.use(express.static('public'));
app.use(express.json());

//Home Route
app.length('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'});
})
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})