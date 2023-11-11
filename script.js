var isDate = function (input) {
  //   write your code here
	if (input instanceof Date) {
    return true;
  }

  // Check if the input is a valid date string
  if (typeof input === 'string') {
    const date = new Date(input);
    return !isNaN(date.getTime());
  }
	if (typeof input === 'number' && !isNaN(input)) {
    const date = new Date(input);
    return !isNaN(date.getTime());
  }

  // If none of the conditions are met, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
