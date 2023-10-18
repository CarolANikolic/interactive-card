const insertInputValueIntoCard = (inputKeyword, inputValue) => {
    
    const cardFieldsContainer = $(".card-section");
    const cardFields = cardFieldsContainer.find("span");

    const matchingField = cardFields.filter(function() {
        return $(this).data(inputKeyword) !== undefined ;
    });
            
    let cardField = matchingField;

    if(inputKeyword) {
        cardField.text(inputValue)
    }         
}

export default insertInputValueIntoCard