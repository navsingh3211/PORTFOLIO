export const apiresponse = async (success, message, code, data = {}) => {
  return {
    success,
    message,
    code,
    data
  };
};

export const extendedresponse = async (
  success,
  message,
  data = {},
  additionalData = {}
) => {
  return {
    success,
    message,
    data,
    additionalData
  };
};

export const authenticationResponse = async (
  success,
  message,
  validation = {},
  data = {}
) => {
  return {
    success,
    message,
    validation,
    data
  };
};
