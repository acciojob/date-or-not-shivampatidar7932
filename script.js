function isDate(input) {
    if (input instanceof Date && !isNaN(input)) {
        return true;
    }

    if (typeof input === 'string') {
        const dateObject = new Date(input);
        return !isNaN(dateObject);
    }

    return false;
}

// Take user input
let userInput = prompt("Enter a date or a string that represents a date:");
let result = isDate(userInput);

// Display the result using alert
if (result) {
    alert("The input is a valid date or a string that can be parsed into a valid date.");
} else {
    alert("The input is not a valid date or a string that can be parsed into a valid date.");
}
