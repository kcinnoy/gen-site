const { validationResult } = require('express-validator');

exports.runValidation = (req, res, next) => {
    const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(422).json({ error: errors.array()[0].msg });
    // }
    // next();

    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push(err.msg))


    return res.status(422).json({
      errors: extractedErrors,
    })

};