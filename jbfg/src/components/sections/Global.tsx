import styles from 'styles/css/global.module.css';
import {text} from 'services/globalService';
import GlobalComp from '@ui/GlobalComp';

function Global() {
    return (
        <section className={styles.section}>
            <div className={styles.bg}>
                <div>
                    <img src="/jbfg/icons/earth-o.svg" />
                    <div>
                        <img src="/jbfg/icons/nations.svg" />
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <h2>{text.title}</h2>
                        <p>{text.content[0]}<br />{text.content[1]}</p>
                    </div>
                    <div className={styles.right}>
                        <div>
                            <div>
                                <GlobalComp country={text.branch.cambodia} />
                                <GlobalComp country={text.branch.myanmar} />
                            </div>
                            <div>
                                <GlobalComp country={text.branch.vietnam} />
                                <GlobalComp country={text.branch.korea} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Global;