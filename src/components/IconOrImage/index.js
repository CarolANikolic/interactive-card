const IconOrImage = (source, alternative, style) => {
    const iconOrImage = $("<img>");
    iconOrImage.attr("src", source);
    iconOrImage.attr("alt", alternative);
    iconOrImage.addClass(style)

    return iconOrImage
}

export default IconOrImage