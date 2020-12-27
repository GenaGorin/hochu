import styles from '../Sidebar.module.css';
import Product from './product/Product';
import free from '../../../assets/images/free.png'

function PromoProduct() {
    return (
        <div className ={styles.ppwrap}>
            <Product />
            <div className ={styles.getFreeWrap}>
                <div>
                    Как получить товар бесплатно ?
                </div>
                <div>
                    <img src={free} alt=''/>
                </div>
            </div>
            <Product />
            <div className ={styles.inviteFriends}>
                Приглашено друзей:2 <span>(-100P)</span>
            </div>
        </div>
    );
}

export default PromoProduct;
