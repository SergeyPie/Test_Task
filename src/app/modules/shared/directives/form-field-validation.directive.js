const ERROR_HINT_CSS_CLASS = 'app-form-field__error-hint';
const ERROR_BORDERED_CSS_CLASS = 'app-form-field-input--error';

export const FormFieldValidationDirective = function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      const fieldName = attrs.name;

      ngModel.$validators.formFieldValidation = function (modelValue, viewValue) {

        const validationRules = {
          username: {
            required: requiredValidator(viewValue)
          },
          first_name: {
            required: requiredValidator(viewValue)
          },
          last_name: {
            required: requiredValidator(viewValue)
          },
          email: {
            required: requiredValidator(viewValue),
            invalid: emailValidator(viewValue)
          },
          password: {
            required: requiredValidator(viewValue),
            invalid: passwordValidator(viewValue)
          },
          repeat_password: {
            required: requiredValidator(viewValue),
            invalid: passwordValidator(viewValue)
          }
        };

        let errorHintDiv = angular.element("<div>");
        errorHintDiv.addClass(ERROR_HINT_CSS_CLASS);

        const firstValidator = findFirstInvalidValidator(validationRules[fieldName])

        if (ngModel.$dirty && (firstValidator && !firstValidator.isValid)) {
          removeErrorHint(element);

          element.addClass(ERROR_BORDERED_CSS_CLASS);
          errorHintDiv.text(firstValidator.message)
          element.after(errorHintDiv)
        } else {
          removeErrorHint(element);
        }

        return firstValidator && firstValidator.isValid;
      };
    }
  };
}

function requiredValidator(value) {
  return {
    isValid: Boolean(value && value.length > 0),
    message: 'Field is required'
  }
}

function passwordValidator(value) {
  return {
    isValid: Boolean(value && value.length >= 8 && /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/.test(value)),
    message: 'Min length 8. at least one number and one letter'
  }
}

function emailValidator(value) {
  return {
    isValid: Boolean(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)),
    message: 'Email in invalid format'
  }
}

function removeErrorHint(element) {
  var nextElement = element.next();
  if (nextElement.hasClass(ERROR_HINT_CSS_CLASS)) {
    nextElement.remove();
  }
  element.removeClass(ERROR_BORDERED_CSS_CLASS);
}

function findFirstInvalidValidator(validationRules) {
  for (var ruleKey in validationRules) {
    if (validationRules.hasOwnProperty(ruleKey)) {
      var rule = validationRules[ruleKey];
      if (!rule.isValid) {
        return rule;
      }
    }
  }
}
