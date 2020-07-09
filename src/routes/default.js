const express = require('express');
const defaultRoutes = express.Router();

defaultRoutes.get('/', (req, res, next)=> {
    return res.send('Default route!')
});

module.exports = defaultRoutes;