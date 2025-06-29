import styles from 'styles/css/globalComp.module.css';
import {GlobalServiceProps} from 'types/globalServiceProps';
import Image from 'next/image';

function GlobalComp({ country }: GlobalServiceProps) {
    return (
        <div className={styles.globalComp}>
            <div>
                <Image src={country.img} alt={country.img} width={30} height={30} />
                <p>{country.company}</p>
            </div>
            <div>
                <p>영업점 현황</p>
                <nav>
                    <ul>
                        {country.situation.map((item, index) => (
                            <li key={item[1] + index}>
                                <p><span>{item[0]}</span>{item[1]}</p>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default GlobalComp;