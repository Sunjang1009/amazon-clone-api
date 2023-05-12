const express = require('express');
const router = express.Router();
const { HouseHoldProducts } = require('../models/index.js')//mongoose DB

router.get('', async (req,res,next)=>{
    try {
        const myHouseholdProducts = await HouseHoldProducts.find({});// Mongo grabbing all 
        res.render('/householdProducts/index.ejs', {householdProducts: myHouseholdProducts})
    } catch(err) {
        console.log(err)
        next();
    }
})

router.get('/new',(req,res)=>{
    res.render('/householdProducts/show.ejs')
});

module.exports = router;