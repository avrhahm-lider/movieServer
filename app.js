import express from'express'
import { movies } from './movies.js';

const app = express();
const PORT = 3000;


app.get('/api/data', (req, res) => {
    res.json(movies);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});