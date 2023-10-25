import Paragraph from "../Paragraph/index.js";
import Title from "../Title/index.js";
import IconOrImage from "../IconOrImage/index.js";
import Button from "../Button/index.js";

const FormConfirmation = () => {
    const confirmationContainer = $("<div>");
    confirmationContainer.addClass("confirmationContainer");

    confirmationContainer.append(IconOrImage(
        "../public/images/icon-complete.svg",
        "Completion check mark icon",
        "confirmationIcon"
    ));

    confirmationContainer.append(Title("h1", "Thank you"));
    confirmationContainer.append(Paragraph("We've added your card details"));
    confirmationContainer.append(Button(
        "button", 
        "Continue", 
        "card-btn card-btn-smaller-size",
        () => {
            location.reload()
        })) 

    return confirmationContainer
}

export default FormConfirmation