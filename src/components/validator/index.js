// Libraries
import validator from "validator";

const validations = {
  required: str => {
    const isValid = !validator.isEmpty(str);
    const message = isValid ? "" : "Campo requerido";
    return { isValid, message };
  },
  isEmail: str => {
    const isValid = validator.isEmail(str);
    const message = isValid ? "" : "Campo debe ser un correo electrónico";
    return { isValid, message };
  },
  isInteger: str => {
    const isValid = validator.isInt(str);
    const message = isValid ? "" : "Campo debe ser un número entero";
    return { isValid, message };
  },
  isNumber: str => {
    const isValid = validator.isFloat(str);
    const message = isValid ? "" : "Campo debe ser un número";
    return { isValid, message };
  }
};

const validate = field => {
  const { value } = field.state;
  const fieldProps = Object.keys(field.props);
  const availableValidations = Object.keys(validations);
  const validationsToRun = fieldProps.filter(
    validation => availableValidations.indexOf(validation) !== -1
  );

  return validationsToRun.every(validation => {
    const { isValid, message } = validations[validation](value);

    field.setState({
      invalid: !isValid,
      invalidMessage: message
    });

    // Abort on first error
    return isValid;
  });
};

export default validate;
