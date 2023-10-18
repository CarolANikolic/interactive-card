const cardInputFields = [
    {
        label: "Cardholder name",
        placeholder: "Jane Appleseed",
        value: "",
        validation: /^[A-Za-z\s.'-]+$/,
        validationMessage: "Please, enter a valid cardholder name.",
        keyword: "name",
    },

    {
        label: "Card number",
        placeholder: "1234 5678 9123 0000",
        value: "",
        validation: /^\d{16}$/,
        validationMessage: "Please enter a valid 16-digit card number.",
        keyword: "number"
    },
    
    {
        label: "Exp. Date (mm/yy)",
        placeholder: "mm",
        value: "",
        validation: /^(0[1-9]|1[0-2])$/,
        validationMessage: "Please enter a valid month between 01 and 12.",
        keyword: "month"
    },
    {
        labelDate: "",
        placeholder: "yy",
        value: "",
        validation: /^(0[1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])$/,
        validationMessage: "Please enter a valid year.",
        keyword: "year"
    },

    {
        label: "cvc",
        placeholder: "e.g. 123",
        value: "",
        validation: /^[0-9]{3}$/,
        validationMessage: "Please enter a 3-digit CVC.",
        keyword: "cvc"
    }
]

export default cardInputFields