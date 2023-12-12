const CONSTANTS = {
  MIME_TO_EXTENSION: {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'application/pdf': 'pdf',
    'application/vnd.ms-excel': 'xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
    'application/zip': 'zip',
    'application/gzip': 'gz',
    'application/msword': 'doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      'docx'
  },
  BULK_UPLOAD_MAX_ENQUIRY_FORM: 499,
  MAX_LIMIT_EXCEEDED: 'Maximum limit must be less than equal to ',
  DATA_VALIDATED: 'Data validated successfully.',
  UNAUTHORISED: 'You do not have permission to perform this action!',
  FILE_REQUIRED: 'Input file is required!',
  DATA_CREATED: 'Record created successfully!',
  USER_TYPES: {
    SUPER_ADMIN: 'SUPER_ADMIN',
    ADMIN: 'ADMIN',
    STUDENT: 'STUDENT'
  }
};

export default CONSTANTS;
