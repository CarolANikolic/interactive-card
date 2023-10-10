const Form = (inputArray) => {
    const form = $('<form>');
    const inputContainer = $('<div>');

    inputArray.map(inpuItem => {
        const label = $('<label>');
        const input = $('<input>');

        label.text(inpuItem.label);
        input.attr('placeholder', inpuItem.placeholder);

        inputContainer.append(label);
        inputContainer.append(input);
    });

    form.append(inputContainer);

    return form
}

export default Form