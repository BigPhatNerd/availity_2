const express = require('express');
const router = express.Router();
const {User} = require('../../models');
const { check, validationResult } = require('express-validator');
const { userValidations } = require('../validationHelpers');

//@route POST api/users
//@desc Register route
//@access Public
router.post('/', userValidations, async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {  firstName, lastName, email, address, city, state, zip, npiNumber, phone } = req.body;

        try {
            let user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }
   

            user = new User({
              
               firstName, 
               lastName, 
               email, 
               address,
               city,
               state,
               zip,
               npiNumber, 
               phone
            });
           

            await user.save();

            res.json({msg: "User successfully saved"})

        
            

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');

        }
    });


module.exports = router