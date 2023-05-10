import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Medical from './api/medical';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Server Work'));
app.use('/api/medical', Medical);

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  console.log(`Server running on port ${port}`)
}); 