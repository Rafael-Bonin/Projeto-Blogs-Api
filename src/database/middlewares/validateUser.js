const joi = require('joi');

const validateUser = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  image: joi.string(),
});

const testUser = (req, _res, next) => {
  const { body } = req;
  const { error } = validateUser.validate(body);
  if (error) next({ message: error.message, status: 400 });
  next();
};

module.exports = testUser;