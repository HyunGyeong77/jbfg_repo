import styles from 'styles/css/esg.module.css';
import {text} from 'services/esgService';
import EsgComp from '@ui/EsgComp';

function Esg() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.bg_icon}>
                    {Array(3).fill(null).map((_, index) => (
                        <img key={index} src={`/jbfg/icons/esg-bg-item${index + 1}.svg`} />
                    ))}
                </div>
                <div className={styles.inner}>
                    <div>
                        <div className={styles.left}>
                            <h3>{text.title}</h3>
                            <div>
                                <p>{text.intro[0]}<br />{text.intro[1]}</p>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <div>
                                    <EsgComp textType={text.report} img={"/jbfg/images/esg-icon1.png"} />
                                    <EsgComp textType={text.evaluation} img={"/jbfg/images/esg-icon2.png"} />
                                </div>
                                <div>
                                    <EsgComp textType={text.initiative} img={"/jbfg/images/esg-icon3.png"} />
                                    <EsgComp textType={text.contribution} img={"/jbfg/images/esg-icon4.png"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Esg;