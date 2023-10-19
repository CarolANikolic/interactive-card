const applyValidationStyle = (container) => {
    container.find("span").addClass("errorMessage");
    container.find("input").addClass("failedValidation");
}

export default applyValidationStyle