import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(3).max(33).required().label('Username'),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required()
    .label('Email'),
  //password: Joi.string().min(4).max(33).required().label('Password'),
  phone: Joi.string().min(11).max(14).required().label('Phone'),
  smallsuitcase: Joi.string().trim(),
  largesuitcase: Joi.string().trim(),
  eventtype: Joi.string().trim(),
  from: Joi.string().required().trim(),
  to: Joi.string().required().trim(),
  pickupDate: Joi.string().required().trim(),
  pickupTime: Joi.string().required().trim(),
  numberOfPassengers: Joi.string().required().trim(),
  additionalinfo: Joi.string().trim(),
});

const quotesValidator = async (req, res, next) => {
  let errors = 0;
  let success = 0;

  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    success++;
    return next();
  } catch (error) {
    const formattedErrors = {};
    error.details.forEach((err) => {
      formattedErrors[err.context.key] = err.message.replace(/["']/g, '');
      errors++;
    });
    return res.status(400).json({ error: formattedErrors, errors, success });
  }
};

export default quotesValidator;
