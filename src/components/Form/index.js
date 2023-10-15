const Form = (inputArray) => {
    const form = $('<form>');
    const allInputsContainer = $('<div data-inputFields="container">');

    inputArray.map(inputItem => {
        const inputItemContainer = $('<div>');
        const label = $('<label>');
        const input = $('<input>');

        label.text(inputItem.label);
        input.attr('placeholder', inputItem.placeholder);

        inputItemContainer.append(label);
        inputItemContainer.append(input);
        inputItemContainer.addClass("inputItemContainer");
        allInputsContainer.append(inputItemContainer);
    });

    form.append(allInputsContainer);
    allInputsContainer.addClass("allInputsContainer");

    return form
}

export default Form