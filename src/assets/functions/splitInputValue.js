const splitInputValue = (inputValue, numberOfSplits) => {
    const groups = [];
    let currentGroup = "";

    for(let i=0; i <= inputValue.length; i++) {
        currentGroup += inputValue[i];

        if(currentGroup.length === numberOfSplits) {
            groups.push(currentGroup);
            currentGroup = ""
        }
    } 
    
    return groups
}

export default splitInputValue