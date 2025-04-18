const express = require("express");
const { handleSubmit, getForms } = require("./controllers");

const router = express.Router()


router.post('/submit', handleSubmit)
router.get('/admin', getForms)


module.exports = router