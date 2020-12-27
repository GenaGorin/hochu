import styles from '../../Main.module.css';
import ryzen from '../../../../assets/images/ryzen.png'
import controls from '../../../../assets/controls/controls.module.css';

function Product() {
    return (
        <div className={styles.productWrap}>
            <div className={styles.productImageWrap}>
                <div className={styles.productImage} style={{ backgroundImage: 'url(' + ryzen + ')' }}>
                    <div className={styles.productImageBtn}>
                        <div>Игрушка</div>
                        <div>Мартышка</div>
                    </div>
                </div>
                <div>Получить за 0 Р</div>
            </div>
            <div className={styles.productDescription}>
                <div>Длинное названте товара в одну строчку п...</div>
                <div>Длинное название магазина</div>
                <div>от 350 000 Р</div>
                <div><span>450 500 P</span> <span>-10%</span></div>
            </div>
            <div className = {styles.productInfoWrap}>
                <div>Цена упадет до <span>2000P</span> <br/> Если будет куплено</div>

                <div className={controls.mainInfoBlockWrap} style={{ width: '155px', height: '20px', marginTop: '4px', marginBottom: '8px' }}>
                    <div>120шт</div>
                    <div>За 12:48:35</div>
                </div>
                <div>Куплено: <span>90шт.</span> <span>+2шт</span></div>
            </div>
            <div className ={styles.productBuyBtn}>
                <div>Купить сейчас 5400Р</div>
                <div> По мин. цене 2000Р </div>
            </div>
        </div>
    );
}

export default Product;
