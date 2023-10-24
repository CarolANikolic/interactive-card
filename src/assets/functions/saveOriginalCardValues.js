const saveOriginalCardValues = () => {
    const cardCvc = $(".cardContainerBack__cvc").text();
    const cardNumber = $(".cardContainerFront__number").text()
    const cardName = $(".cardContainerFront__name").text()
    const cardDate = $(".cardContainerFront__date").text()
    const originalValues = [];
    originalValues.push(
        cardCvc,
        cardNumber, 
        cardName, 
        cardDate)

    return originalValues
}

export default saveOriginalCardValues