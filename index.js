import Form from "./src/components/Form/index.js";
import cardInputFields from "./src/assets/objects/cardInputFields.js";

const main = $('main');

main.append(Form(cardInputFields));