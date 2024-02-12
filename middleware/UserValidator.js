const Joi = require('joi');

const userValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().max(20).min(3).pattern(new RegExp('^[a-zA-Z]+$')),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        role: Joi.string().valid('admin', 'user') 
       
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

module.exports = { userValidation };