import styles from '../Sidebar.module.css';
import xiaomi from '../../../assets/images/xiaomi.png'
import { NavLink } from 'react-router-dom';

function JointPurchase() {
    let percent = '35%';
    let style = {
        width: percent,
    }
    return (
        <div className ={styles.jpWrap}>
            <div className = {styles.jpTitle}>
                <div>
                    <img src={xiaomi} alt="" />
                </div>
                <div className = {styles.jpTitleDesc}>
                    <div>Xiaomi</div>
                    <NavLink to = '/cart'>Совместная покупка</NavLink>
                </div>
            </div>
            <div className = {styles.jpContent}>
                <div className ={styles.jpContentDesc}>
                    <div className = {styles.jpContentDescCond}>
                        <div>Тек. условия</div>
                        <div>{percent}/20000р</div>
                    </div>
                    <div>
                        <div>Осталось времени:</div>
                        <div>11:48:24</div>
                    </div>
                </div>
                <div className = {styles.jpContentLineWrap}>
                    <div className ={styles.jpContentLine} style ={style}>
                        <span>{percent}</span>
                    </div>
                </div>
                <div className ={styles.jpContentEnd}>
                    Для скидки <span>20%</span> осталось зкаказать еще на <span>5 000Р</span>.
                </div>
            </div>
        </div>
    );
}

export default JointPurchase;
