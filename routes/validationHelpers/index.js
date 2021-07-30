const { check, validationResult } = require('express-validator');

const validationHelpers = {
	
		userValidations: [
		
		check('firstName', 'First name is required').not().isEmpty(),
		check('lastName', 'Last name is required').not().isEmpty(),
        check('email', 'Please include a valid email').normalizeEmail().isEmail(),
        check("address", 'Address is required').not().isEmpty(),
        check('city', 'City is required').not().isEmpty(),
        check('state', 'State is required').not().isEmpty(),
        check('zip', 'Zip is required').not().isEmpty(),
        check('npiNumber', 'NPI Number is required').not().isEmpty(),
        check('phone', 'Phone number is required').not().isEmpty()
    ]

}

module.exports = validationHelpers