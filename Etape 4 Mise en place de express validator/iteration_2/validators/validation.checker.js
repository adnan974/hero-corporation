const { validationResult } = require('express-validator');

//#Iteration_2_mise_en_place_de_express_validator
// Valide les validation rules

const validationChecker = (req,res,next)=>{
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    next();
}

module.exports = validationChecker;
