const { body, validationResult } = require('express-validator');

const planetValidation = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 1, max: 100 })
    .withMessage('Name must be between 1 and 100 characters'),
  body('rotation_period')
    .optional()
    .isString()
    .withMessage('Rotation period must be a string'),
  body('orbital_period')
    .optional()
    .isString()
    .withMessage('Orbital period must be a string'),
  body('diameter')
    .optional()
    .isString()
    .withMessage('Diameter must be a string'),
  body('climate')
    .optional()
    .isString()
    .withMessage('Climate must be a string'),
  body('gravity')
    .optional()
    .isString()
    .withMessage('Gravity must be a string'),
  body('terrain')
    .optional()
    .isString()
    .withMessage('Terrain must be a string'),
  body('surface_water')
    .optional()
    .isString()
    .withMessage('Surface water must be a string'),
  body('population')
    .optional()
    .isString()
    .withMessage('Population must be a string')
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      errors: errors.array()
    });
  }
  next();
};

module.exports = {
  planetValidation,
  handleValidationErrors
};