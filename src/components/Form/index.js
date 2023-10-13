const Form = (inputArray) => {
    const form = $('<form>');
    const allInputsContainer = $('<div>');

    inputArray.map(inpuItem => {
        const inputItemContainer = $('<div>');
        const label = $('<label>');
        const input = $('<input>');

        label.text(inpuItem.label);
        input.attr('placeholder', inpuItem.placeholder);

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