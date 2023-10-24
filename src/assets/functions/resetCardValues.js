const resetCardValues = (cardFields, originalCardValues) => {
    cardFields.each((index, field) => {
        $(field).text(originalCardValues[index])
    })
}
export default resetCardValues