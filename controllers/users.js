const express = require("express");
const router = express.Router();
const { User } = require('../models/index');
const bcrypt = require("bcryptjs");

router.get('/login', (req,res)=>{
    res.render('users/login');
})

router.get('/signup', (req,res)=>{
    res.render('users/signup')
})

router.post('/signup', async (req,res,next)=>{
    try{
        const newUser = req.body;
        // console.log(req.body);
        const salt = await bcrypt.genSalt(12);
        console.log(`my salt it ${salt}`);
        const hash = await bcrypt.hash(newUser.password, salt);
        console.log(`my hash is ${hash}`);
        newUser.password = hash;
        console.log(newUser);
        await User.create(newUser);
        res.redirect('/login');
    }catch(err){
        console.log(err);
        next();
    }
})

router.post('/login', async (req,res,next)=>{
    try{
        let user;
        const loggedInUser = req.body;
        console.log(req.body);
        const userExisted = await User.exists({email:loggedInUser.email});
        if(userExisted){
            user = await User.findOne({email:req.body.email});
        } else {
            res.redirect('/login');
        }
        const match = await bcrypt.compare(req.body.password, user.password);
        if(match){
            req.session.currentUser = {
                id:user._id,
                username:user.username
            }
            console.log(req.session.username); 
            console.log(match);
            console.log(userExisted);
            res.redirect('/books');

        } else {
            res.redirect('/signup')
        }
    }catch(err){
        console.log(err);
        next();
    }
})

module.exports = router;
