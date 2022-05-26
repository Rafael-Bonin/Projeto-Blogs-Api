const joi = require('joi');

const validatePost = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.required(),
});

const testPost = (req, _res, next) => {
  const { body } = req;
  const { error } = validatePost.validate(body);
  if (error) next({ message: 'Some required fields are missing', status: 400 });
  next();
};

module.exports = testPost;