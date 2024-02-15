const Joi = require('joi');

const productValidator = (req, res, next) => {
    
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        quantity:Joi.number().required(),
        brand:Joi.string(),
    });
    
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();

}

module.exports = {
    productValidator,
}