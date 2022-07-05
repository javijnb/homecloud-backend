const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')

router.post('/', (req, res, next)=> {
    
    const username = req.body.username;
    const password = req.body.password;

    if(username == process.env.USERNAME && password == process.env.PASSWORD){
        const token = jwt.sign({username}, process.env.JWT_SECRET,{
            expiresIn: 604800 //1 week 
        });
        console.log("<AUTHENTICATOR> Successful login request")
        return res.json({
            success: true,
            access_token: token
        })
    }
    console.log("<AUTHENTICATOR> Failed login request")
    return res.json({success: false, msg: "Wrong password"});

});

module.exports = router;