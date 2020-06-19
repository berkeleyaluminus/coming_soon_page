const router = require('express').Router();
let Emailer = require('../models/emailer.model');

router.route('/').get((req,res) => {
    Emailer.find()
        .then(emailers => res.json(emailers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const email = req.body.email;

    const newEmailer = new Emailer({email});
    
    newEmailer.save()
        .then(() => res.json('Emailer added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;