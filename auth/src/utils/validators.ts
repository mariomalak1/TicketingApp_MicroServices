import Joi from "joi"

const authSchemas = {
    signupSchema: {
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        }),
    },
    
    signinSchema: {
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }),
    }
}

export {
    authSchemas,
}