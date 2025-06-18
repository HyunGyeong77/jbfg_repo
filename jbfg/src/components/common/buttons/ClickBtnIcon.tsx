import styles from 'styles/css/ClickBtnIcon.module.css';
import Image from 'next/image';

const ClickBtnIcon = ({src, alt}: Types) => {
    return (
        <Image src={src} alt={alt} width={40} height={40}
            className={styles.clickBtnIcon} />
    );
}

type Types = {
    src: string,
    alt: string
}

export default ClickBtnIcon;