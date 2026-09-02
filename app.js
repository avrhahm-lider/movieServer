import express from 'express'
import { movies } from './movies.js';
import cors from'cors'

const app = express();
app.use(cors())
const PORT = 3000;


app.get('/api/data', (req, res) => {
    console.log(movies.length);
    
    res.json(movies);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});