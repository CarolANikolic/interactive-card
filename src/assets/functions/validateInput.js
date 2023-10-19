import insertInputValueIntoCard from "./insertInputValuesIntoCard.js";
import applyValidationStyle from "./applyValidationStyle.js";
import removeValidationStyle from "./removeValidationStyle.js";

const validateInput = (inputArray, objectArray) => {

    const emptyInputErrorMessage = "Can't be empty."
    let isValid = true;
    let monthValue = "";
    let yearValue = "";

    inputArray.each((i, input) => {
        const inputValue = $(input).val();
        const inputValidationExpression = objectArray[i].validation;
        const validationErrorMessage = objectArray[i].validationMessage;
        const inputContainer = $(input).parent();
        const inputKeyword = objectArray[i].keyword;

        inputContainer.find("span").remove();
    
        if (inputValue === "") {
            const emptyErrorMessage = $(`<span>${emptyInputErrorMessage}</span>`);
            inputContainer.append(emptyErrorMessage);
            isValid = false;

        } else if (!inputValidationExpression.test(inputValue)) {
            inputContainer.find("span").remove();
            const validationMessage = $(`<span>${validationErrorMessage}</span>`);
            inputContainer.append(validationMessage)
            isValid = false;  

            //Month and year in the card are in one span.
            //We need to capture their value separated to combine it later and insert it into the card.
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