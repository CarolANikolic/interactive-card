import insertInputValueIntoCard from "./insertInputValuesIntoCard.js";
import applyValidationStyle from "./applyValidationStyle.js";
import removeValidationStyle from "./removeValidationStyle.js";

const validateInput = (inputArray, objectArray) => {
    let isValid = true;
    let monthValue = "";
    let yearValue = "";

    inputArray.each((i, input) => {
        const inputValue = $(input).val();
        const inputValidationExpression = objectArray[i].validation;
        const inputValidationMessage = objectArray[i].validationMessage;
        const inputContainer = $(input).parent();
        const inputKeyword = objectArray[i].keyword;

        inputContainer.find("span").remove();
    
        if (inputValue === "") {
            const emptyErrorMessage = $("<span>Can't be empty.</span>");
            inputContainer.append(emptyErrorMessage);
            isValid = false;

        } else if (!inputValidationExpression.test(inputValue)) {
            inputContainer.find("span").remove();
            const validationMessage = $(`<span>${inputValidationMessage}</span>`);
            inputContainer.append(validationMessage)
            isValid = false;   

        } else if (inputKeyword === "month" && isValid) {
            monthValue = inputValue;

        } else if (inputKeyword === "year" && isValid) {
            yearValue = inputValue

        } else {
            isValid = true;  
            insertInputValueIntoCard(inputKeyword, inputValue)   
        }
    
        if (!isValid) {
            applyValidationStyle(inputContainer);
        } else {
            removeValidationStyle(inputContainer)
        } 
    });

    const dateValue = monthValue + "/" + yearValue;
    insertInputValueIntoCard("date", dateValue)

    return isValid;
};

export default validateInput;