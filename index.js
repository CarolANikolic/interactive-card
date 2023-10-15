import Form from "./src/components/Form/index.js";
import cardInputFields from "./src/assets/objects/cardInputFields.js";
import validateInput from "./src/assets/functions/validateInput.js";
import Button from "./src/components/Button/index.js";

// Add the Form into the Main Section of the DOM for User Card Details Input.
const main = $("main");
main.append(Form(cardInputFields));

// Enable Live Validation as the User Types for Better UX.
const allInputs = $("input");
allInputs.on("keyup", () => {
    validateInput(allInputs, cardInputFields)
})

// Append the Button into the Form  to be Able to Submit and Make a Final Validation before Submission.
const allInputsContainer = $('[data-inputFields="container"]');
allInputsContainer.append(Button(
    "submit", 
    "Confirm", 
    "card-btn", 
    (e) => {
    e.preventDefault();
    validateInput(allInputs, cardInputFields)

    if(validateInput(allInputs, cardInputFields) === true) {
        console.log("All fields are validated.")
    } else {
        console.log("Not all fields are validated.")
    }
}))