import styles from '../../Main.module.css';
import controls from '../../../../assets/controls/controls.module.css';

function MinimumPrice({ title, description }) {
    return (
        <div className={styles.titleWrap}>
            <h2>
                {title}
            </h2>
            <h4>{description && description}</h4>
            <div>
                <select className={controls.mainSelect}>
                    <option>По популярности</option>
                </select>
            </div>
        </div>
    );
}

export default MinimumPrice;
