import {ImageLoaderProps} from 'types/imageLoaderProps';

export default function ImageLoader({ src, width, quality = 75 }: ImageLoaderProps) {
    return `https://hyungyeong77.github.io/jbfg${src}?w=${width}&q=${quality}`;
}