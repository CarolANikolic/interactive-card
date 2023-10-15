const Button = (type, content, style, action) => {
    const button = $("<button>");
    button.type = type;
    button.text(content);
    button.addClass(style);
    button.on("click", action);

    return button
}
export default Button