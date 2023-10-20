import splitInputValue from "./splitInputValue.js";

const insertInputValueIntoCard = (inputKeyword, inputValue) => {
    
    const cardFieldsContainer = $(".card-section");
    const cardFields = cardFieldsContainer.find("span");

    const matchingField = cardFields.filter(function() {
        return $(this).data(inputKeyword) !== undefined ;
    });
            
    let cardField = matchingField;

    if(inputKeyword) {
        // The card number must have the value splited in 4 with a space in between
        if(inputKeyword === "number") {
            const inputSplited = splitInputValue(inputValue, 4)
            cardField.text(inputSplited.join(" "))
        }  else {
            cardField.text(inputValue)
        }
    }      
}

export default insertInputValueIntoCard