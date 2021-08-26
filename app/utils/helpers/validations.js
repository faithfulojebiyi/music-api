/**
 * constain Validation Helpers
 * @class ValidationHelper
 */
class ValidationHelper {
  /**
   * It validates a number with minimum and maximum value
   * @static
   * @param {string} param - The field name
   * @param {object} joiObject - joi object used
   * @param {integer} min - The minimum value required
   * @param {integer} max - The maximum value required
   * @memberof ValidationHelper
   * @returns {Boolean} - True or False
   */
  static numberCheck (param, joiObject, min = 1, max) {
    return joiObject
      .number()
      .required()
      .min(min)
      .max(max)
      .messages({
        'any.required': `${param} is a required field`,
        'number.base': `${param} must be a number`,
        'number.empty': `${param} cannot be an empty field`,
        'number.min': `${param} can not be lesser than ${min}`,
        'number.max': `${param} can not be greater than ${max}`
      })
  }

  /**
   * It validates a string
   * @static
   * @memberof ValidationHelper
   * @param {string} param - The name of the field to validate
   * @param {*} joiObject - The joi object
   * @param {*} min - The minimum value of the field
   * @param {*} max - The maximum value of the field
   * @returns {Boolean} - True or false
   */
  static stringCheck (param, joiObject, min = 1, max = 1200) {
    return joiObject
      .string()
      .required()
      .min(min)
      .max(max)
      .messages({
        'any.required': `${param} is a required field`,
        'string.max': `${param} can not be lesser than ${max} characters`,
        'string.min': `${param} can not be lesser than ${min} characters`,
        'string.base': `${param} must be a string`,
        'string.empty': `${param} cannot be an empty field`
      })
  }
}

export default ValidationHelper
