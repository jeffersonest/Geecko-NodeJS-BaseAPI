const express = require('express');
const userRoutes = express.Router();

/**
* @api {post} /api/user Create user
* @apiName Create new user
* @apiPermission admin
* @apiGroup User
*
* @apiParam  {String} [userName] username
* @apiParam  {String} [email] Email
* @apiParam  {String} [phone] Phone number
* @apiParam  {String} [status] Status
*
* @apiSuccess (200) {Object} mixed `User` object
*/

userRoutes.get('/register', (req, res, next)=> {
    return res.status(200).send('User route!')
});

module.exports = userRoutes;