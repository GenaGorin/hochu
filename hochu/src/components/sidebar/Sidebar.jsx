import styles from './Sidebar.module.css';
import controls from '../../assets/controls/controls.module.css';
import sale from '../../assets/images/sale.png';
import JointPurchase from './joinPurhcase/JointPurchase';
import PromoProduct from './promoProduct/PromoProduct';
import NewCollection from './newCollection/NewCollection';

function Sidebar() {
    return (
        <div className = {styles.sidebarContainer}>
            <div className ={styles.infoBlock}>
                <img src={sale} alt="sale"/>
                <div>
                    <div className ={styles.infoBlockText}>Получай товары БЕСПЛАТНО!</div>
                    <div className = {controls.mainBtnBlue +' '+ styles.infoBlockBtnCustom}>Узнать подробнее</div>
                </div>
            </div>
            <JointPurchase />
            <PromoProduct />
            <NewCollection />
        </div>
    );
}

export default Sidebar;
