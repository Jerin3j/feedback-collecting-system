const express = require("express");
const router = require("./route");
const cors = require("cors");
require('dotenv').config()

const app = express();
const PORT = 3001;


app.use(express.json());
app.use(cors());
app.use(router);



// Start the server
app.listen(PORT, () => console.log(`App running on port ${PORT}`));