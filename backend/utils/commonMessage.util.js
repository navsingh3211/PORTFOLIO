/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
const MESSAGES = {
  USER_SIGNUP_COMPLETE:'User has been registered successfully!',
  USER_ALREADY_EXIT:'User already exited with given userName or email.',
  NO_USER_FOUND:"No user found with given credentials",
  INVALID_TOKEN: 'Token Invalid!',
  DATA_FOUND: 'Data Found!',
  NO_DATA_FOUND: 'No Data Found!',
  LOGIN_SUCCESS: 'Login successful!',
  LOGOUT_SUCCESS: 'Logged out successful!',
  NOT_EXISTS: 'Account does not exist in our records !',
  SOMETHING_WRONG: 'Something went wrong!',
  INVALID_EMAIL: 'You have entered an email is not exist in our records.',
  INVALID_PASSWORD:
    'You have entered a password that does not match your email.',
  INVALID_CRED: 'You have entered an invalid email address or password!',
  INVALID_MAIL: 'You have entered an invalid email address!',
  OTP_SENT: 'OTP has been sent to your registered email!',
  OTP_NOT_SENT: 'OTP send failed!',
  INVALID_OTP: 'You have entered an invalid OTP!',
  OTP_VERIFY: 'OTP verified successfully!',
  PASSWORD_VERIFIED: 'Password updated successfully!',
  BAD_REQUEST: 'Invalid request!',
  VALID_USER: 'Valid User',
  USER_TYPE_NOT_ACTIVE: 'User type not active!',
  VALIDATION_ERROR: 'Validation error!',
  

  UNAUTHORISED: 'You do not have permission to perform this action!',
  GENERAL_ERROR: 'Some error has been occured !',
  VALIDATION: {
    OTP: 'Otp should be minimum 6 digit',
    PASSWORD: 'Password should be minimum 6 character',
    DESC: 'Description should be maximum 300 character',
    ANNOUNCEMENT_DESC: 'Description should be maximum 1500 character'
  },
  Generalstatus: {
    PENDING: 'Pending',
    APPROVED: 'Approved',
    REJECTED: 'Rejected'
  },
  SOME_DATA_MISSING:'Some data missing or wrong from payload',
  PAYMENT_PENDING:'Payment is pending for this given id.',
  ORDER_PICKUP_SUCCESS: 'Item Order(s) has been confirmed successfully.',
  ORDER_REJECTED: 'Item orders has been rejected.',
  IS_ASSIGN_POSSIBLE:'Please select some students or items to assign the student(s).',
};

export default MESSAGES;

