const saveOriginalCardValues = () => {
    const cardCvc = $(".cardContainerBack__cvc").text();
    const cardName = $(".cardContainerFront__name").text()
    const cardNumber = $(".cardContainerFront__number").text()
    const cardDate = $(".cardContainerFront__date").text()
    const originalValues = [];
    originalValues.push(cardCvc, cardName, cardNumber, cardDate)

    return originalValues
}

export default saveOriginalCardValues