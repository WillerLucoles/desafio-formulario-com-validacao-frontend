import { useState } from "react";

export const useFormValidation = (schema) => {
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    try {
      schema.parse(values);
      setErrors({});
      return true;
    } catch (err) {
      const formattedErrors = err.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      console.log("Validation errors:", formattedErrors);
      setErrors(formattedErrors);
      return false;
    }
  };

  return { errors, validate };
};