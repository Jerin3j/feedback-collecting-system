const express = require("express");
const router = require("./route");
require('dotenv').config()

const app = express();
const PORT = process.env.ORIGIN_URL || 3001;


app.use(express.json());
app.use(router);


// Start the server
app.listen(PORT, () => console.log(`App running on port ${PORT}`));