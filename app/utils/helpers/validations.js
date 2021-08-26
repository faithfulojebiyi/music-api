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

  /**
   * It validates date
   * @static
   * @memberof ValidationHelper
   * @param {string} param - The name of the field to validate
   * @param {object} joiObject - The joi object
   * @returns {Boolean} - True or false
   */
  static dateCheck (param, joiObject) {
    return joiObject
      .date()
      .required()
      .messages({
        'any.required': `${param} is a required field`,
        'date.base': `${param} must be a correct date`,
        'string.empty': `${param} cannot be an empty field`
      })
  }

  /**
   * It validate a password
   * @static
   * @memberof ValidationHelper
   * @param {object} joiObject - The joi object
   * @returns {Boolean} - True or false
   */
  static passwordCheck (joiObject) {
    return joiObject
      .string()
      .trim()
      .required()
      .min(7)
      .messages({
        'string.base': 'Password must be a string',
        'string.empty': 'Password field cannot be an empty field',
        'any.required': 'Password field is required',
        'string.min': 'Password can not be lesser than 7 characters'
      })
  }

  /**
   * It validates a string that is not required
   * @static
   * @memberof ValidationHelper
   * @param {string} param - The name of the field to validate
   * @param {*} joiObject - The joi object
   * @param {*} min - The minimum value of the field
   * @param {*} max - The maximum value of the field
   * @returns {Boolean} - True or false
   */
  static editStringCheck (param, joiObject, min = 0, max = 1200) {
    return joiObject
      .string()
      .min(min)
      .max(max)
      .messages({
        'string.base': `${param}  must be a string`,
        'string.empty': `${param} cannot be an empty field`,
        'string.max': `${param} can not be lesser than ${max} characters`,
        'string.min': `${param} can not be lesser than ${min} characters`
      })
  }

  /**
   * It validate a phonenumber
   * @static
   * @memberof ValidationHelper
   * @param {object} joiObject - The joi object
   * @returns {Boolean} - True or false
   */
  static phoneNumberCheck (joiObject) {
    const re = /^[0-9]{11,14}$/
    return joiObject
      .string()
      .required()
      .pattern(new RegExp(re))
      .messages({
        'string.pattern.base':
            'Phone number must be a number between 11 and 14 digits',
        'string.empty': 'Phone number must not be an empty field',
        'any.required': 'Phone number  is a required field'
      })
  }

  /**
   * It validate a phonenumber that is not required.
   * @static
   * @memberof ValidationHelper
   * @param {object} joiObject - The joi object
   * @returns {Boolean} - True or false
   */
  static editPhoneCheck (joiObject) {
    const re = /^[0-9]{11,14}$/
    return joiObject
      .string()
      .pattern(new RegExp(re))
      .messages({
        'string.pattern.base':
          'Phone Number must be a number between 11 and 14 digits',
        'string.empty': 'Phone Number must not be an empty field',
        'any.required': 'Phone Number  is a required field'
      })
  }

  /**
   * It validate an email
   * @static
   * @memberof ValidationHelper
   * @param {object} joiObject - The joi object
   * @returns {Boolean} - True or false
   */
  static emailCheck (joiObject) {
    return joiObject
      .string()
      .email()
      .required()
      .messages({
        'any.required': 'Email is a required field',
        'string.email': 'Email is not valid',
        'string.empty': 'Email cannot be an empty field'
      })
  }

  /**
   * It validate an email that is not required.
   * @static
   * @memberof ValidationHelper
   * @param {object} joiObject - The joi object
   * @returns {Boolean} - True or false
   */
  static editEmailCheck (joiObject) {
    return joiObject
      .string()
      .email()
      .messages({
        'string.email': 'Email is not valid',
        'string.empty': 'Email cannot be an empty field'
      })
  }
}

export default ValidationHelper
