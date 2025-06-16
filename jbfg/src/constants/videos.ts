

export const videos = {
    main: VideoComponents("kv.mp4")
}

function VideoComponents(path: string) {
    return process.env.PUBLIC_URL + "/video/" + path;
}