const { check } = require('express-validator');

//#Iteration_2_mise_en_place_de_express_validator
        // Ici, on encapsule les regles de validation dans un clsse, comme ça elle est réutilisable
const userValidationRules = () => {
     return[
            check('name').isLength({ min: 3 }),
            check('level').isNumeric()
     ]
    

}

module.exports = userValidationRules;

