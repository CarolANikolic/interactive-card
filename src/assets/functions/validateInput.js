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
        
        if (!isValid) {
            inputContainer.find("span").addClass("errorMessage");
            inputContainer.find("input").addClass("failedValidation");
        } else {
            inputContainer.find("span").removeClass("errorMessage");
            inputContainer.find("input").removeClass("failedValidation");
        }
    });
        
    return isValid;
};

export default validateInput;

