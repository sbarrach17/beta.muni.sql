export const validateRequiredFields = (formData, requiredFields) => {
    const emptyFields = requiredFields.filter(field => !formData[field]);
    return emptyFields;
  };
  