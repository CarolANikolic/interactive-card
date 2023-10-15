const validateInput = (inputArray, objectArray) => {
    let isValid = true;

    inputArray.each((i, input) => {

        const inputValue = $(input).val();
        const inputValidationExpression = objectArray[i].validation;
        const inputValidationMessage = objectArray[i].validationMessage;
        const inputContainer = $(input).parent() ;

        inputContainer.find("span").remove();

        if (inputValue === "") {
            inputContainer.append("<span>Can't be empty.</span>");
            isValid = false; 
        } else if (!inputValidationExpression.test(inputValue)) {
            inputContainer.find("span").remove();
            inputContainer.append(`<span>${inputValidationMessage}</span>`);
            isValid = false; 
        } 
    });
        
    return isValid;
};

export default validateInput;

