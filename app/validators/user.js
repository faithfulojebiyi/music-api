import Joi from 'joi'
import { ValidationHelper } from '../utils/helpers'

const {
  emailCheck, passwordCheck, stringCheck,
  editStringCheck, editPhoneCheck, editEmailCheck
} = ValidationHelper

export const userSignUpSchema = Joi.object({
  firstName: stringCheck('First name', Joi, 3),
  lastName: stringCheck('Last name', Joi, 3),
  email: emailCheck(Joi),
  username: stringCheck('Username', Joi, 2),
  password: passwordCheck(Joi),
  phoneNumber: editPhoneCheck(Joi)
})

export const userLoginSchema = Joi.object({
  email: editEmailCheck(Joi),
  username: editStringCheck('UserName', Joi, 2),
  password: passwordCheck(Joi)
}).xor('email', 'username')

export const updateUserSchema = Joi.object({
  first_name: editStringCheck('First name', Joi, 3),
  last_name: editStringCheck('Last name', Joi, 3),
  userName: editStringCheck('UserName', Joi, 2),
  phone_number: editPhoneCheck(Joi)
})
