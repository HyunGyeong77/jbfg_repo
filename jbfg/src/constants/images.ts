

export const images = {
    logo: ImageComponent("svgviewer-png-output.png"),
    logo_black: ImageComponent("svgviewer-png-output-black.png"),
    aa: ImageComponent("aa.png"),
    arrow: ImageComponent("arrow.png"),
    arrow_hover: ImageComponent("arrow_hover.png"),
    download: ImageComponent("download.png"),
    download_hover: ImageComponent("download_hover.png")  
}

function ImageComponent(path: string) {
    return process.env.PUBLIC_URL + "/img/" + path;
}