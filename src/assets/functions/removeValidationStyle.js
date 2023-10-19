const removeValidationStyle = (container) => {
    container.find("span").removeClass("errorMessage");
    container.find("input").removeClass("failedValidation");
}

export default removeValidationStyle