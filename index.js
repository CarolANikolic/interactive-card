import Form from "./src/components/Form/index.js";
import cardInputFields from "./src/assets/objects/cardInputFields.js";
import validateInput from "./src/assets/functions/validateInput.js";
import Button from "./src/components/Button/index.js";
import removeForm from "./src/assets/functions/removeForm.js";
import saveOriginalCardValues from "./src/assets/functions/saveOriginalCardValues.js";
import FormConfirmation from "./src/components/FormConfirmation/index.js";

// Add the Form into the Main Section of the DOM for User Card Details Input.
const main = $("main");
const cardForm = Form(cardInputFields);
main.append(cardForm);

const originalCardValues = saveOriginalCardValues();
const cardFields = $(".card-section").find("span");

// Enable Live Validation as the User Types for Better UX.
const allInputs = $("input");
allInputs.on("keyup", () => {
    validateInput(allInputs, cardInputFields)
})

const test = $(".cardContainerBack")
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
        removeForm(cardForm)
        main.append(FormConfirmation())
    } 
}))