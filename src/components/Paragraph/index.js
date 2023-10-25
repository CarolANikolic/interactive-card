const Paragraph = (paragraphText) => {
    const paragraph = $("<p>");
    paragraph.text(paragraphText);
    return paragraph
}
export default Paragraph