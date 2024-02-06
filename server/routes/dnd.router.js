const express = require('express');
const router = express.Router();
const axios = require('axios')



router.get('/', (req, res) => {
    axios.get(`https://www.dnd5eapi.co/`)
    .then((response) => {
        res.send(response.data);
    })
    .catch(error => {
        console.log("error in the server", error);
    })
})

  module.exports = router;