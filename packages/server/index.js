const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const medical = require("./api/medical");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('It Work'));
app.use('/api/medical', medical);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 