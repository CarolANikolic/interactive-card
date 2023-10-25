const Title = (titleType, titleText) => {
    const title = $(`<${titleType}>`);
    title.text(titleText);

    return title
}

export default Title