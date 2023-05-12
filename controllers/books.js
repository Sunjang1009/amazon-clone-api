const express = require('express');
const router = express.Router();
const { books } = require('../models/index.js');//connecting to mongoose

const seededData = [
            {
                title: "The outsiders",
                author: "S.E. Hinton",
                price: 5.99,
                user: "6434b093b54a20afc11c614d"
            }, {
                title: "Odd Thomas",
                author: "Dean Koontz",
                price: 8.99,
                user: "6434b093b54a20afc11c614d"
            }, {
                title: "The Four Agreements",
                author: "Don Miguel Ruiz",
                price: 4.99,
                user: "6434b945091a2d084a1c6356"
            }, {
                title: "Wild",
                author: "Cheryl Strayed",
                price: 19.99,
                user: "6434b945091a2d084a1c6356"
            }
];

router.get('', async (req, res, next) => {
    try {
        let myBooks;

    
        if (req.query.s){
            myBooks = await books.find({author: req.query.s})
            console.log(myBooks);
        
        } else {
            myBooks = await books.find({})
        }

        res.json(myBooks);
        
    } catch(err) {
        //if there is err, comes here
        console.log(err);
        next();
        // next();//not required.. nice to have
    }
})


//seeding database
router.get('/seed', async (req,res,next)=>{
    try{
        await books.deleteMany({})
        await books.insertMany(seededData);
    }catch(err){
        console.log(err);
        next();
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        //grab the book has the mongo id 
        const myBook = await books.findById(req.params.id);
        console.log(myBook);
        res.json(myBook)
    } catch(err) {
        console.log(err);
        next();
    }
})

// router.get('/:title', async (req,res,next)=>{
//     try{
//         const myBook = await books.findOne({title:req.params.title})
//         console.log(book);
//         res.render('books/show', {myBook});
//     }catch(err){
//         console.log(err)
//         next()
//     }
// })


router.post('', async (req, res, next) => {
    try {
        const newBook = await books.create(req.body);
        //req.body from postman
        
        console.log(newBook)
        res.redirect('/books');
    } catch(err){
        console.log(err)
        next();
    }
})

router.put('/:id', async (req,res,next)=>{
    try{
        const UpdatedBook = await books.findByIdAndUpdate(req.params.id, req.body);
        console.log(UpdatedBook);
        res.redirect(`/books/${req.params.id}`);
    } catch (err){
        console.log(err)
        next();
    }
})

router.delete('/:id', async (req,res,next)=>{
    try{
        const deletedBook = await books.findByIdAndDelete(req.params.id);
        console.log(deletedBook);
        res.redirect('/books');
    } catch(err){
        console.log(err)
        next()
    }
})


module.exports = router;