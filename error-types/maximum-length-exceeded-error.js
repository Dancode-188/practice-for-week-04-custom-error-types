const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength) {

    let message;
    if (excessLength) {
      message = `Maximum length exceeded by ${excessLength}`;
    } else {
      message = 'Maximum length exceeded';
    }
    super(message);


    this.name = 'MaximumLengthExceededError';
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}