
export const FormFieldValidationDirective =function() {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {
      ngModelCtrl.$validators.customUserValidation = function (modelValue, viewValue) {
        const value = modelValue || viewValue;

        if (attrs.name === 'email') {
          const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
          return emailPattern.test(value);
        }

        if (attrs.name === 'password') {
          const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
          return passwordPattern.test(value);
        }

        return true;
      };
    }
  };
}
