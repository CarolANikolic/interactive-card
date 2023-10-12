const Form = (inputArray) => {
    const form = $('<form>');
    const allInputsContainer = $('<div>');

    inputArray.map(inpuItem => {
        const inpuItemContainer = $('<div>');
        const label = $('<label>');
        const input = $('<input>');

        label.text(inpuItem.label);
        input.attr('placeholder', inpuItem.placeholder);

        inpuItemContainer.append(label);
        inpuItemContainer.append(input);
        inpuItemContainer.addClass("inpuItemContainer");
        allInputsContainer.append(inpuItemContainer);
    });

    form.append(allInputsContainer);
    allInputsContainer.addClass("allInputsContainer");

    return form
}

export default Form