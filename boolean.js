console.log(3 == "3");
console.log(3 === "3");

// There is a difference because in the first example they compare the value which is both 3, so the same but in the second example the type is compared, the first one being a number and the second one a string, this is why it is considered false.

const someVariable = true;
const message = someVariable ? true : false;
console.log(message);

// Stacey will be shown as the result is being shown by order and by first entry ...I am not too sure how to explain it ..