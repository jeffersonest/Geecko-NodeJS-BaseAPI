const express = require('express');
const defaultRoutes = express.Router();

defaultRoutes.get('/', (req, res, next)=> {
    return res.status(200).send('Default route!')
});

module.exports = defaultRoutes;