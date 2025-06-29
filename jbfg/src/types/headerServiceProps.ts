export type HeaderServiceProps = {
    intro : repeat,
    structure: repeat,
    info: repeat,
    center: repeat,
    esg: repeat,
    [key: string]: repeat
}

type repeat = {
    title: string,
    menu: string[],
    subMenu: string[][]
}