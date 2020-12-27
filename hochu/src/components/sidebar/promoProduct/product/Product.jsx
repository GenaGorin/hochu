import styles from '../../Sidebar.module.css';
import pizza from '../../../../assets/images/Pizza.png';
import controls from '../../../../assets/controls/controls.module.css';

function Product() {
    return (
        <div>
            <div className = {styles.productTitle}>
                <div>
                    <img src={pizza} alt="Product"/>
                </div>
                <div className ={styles.productTitleDesc}>
                    <div className ={styles.productTitleDescName}>Пицца "терияки" длиное название</div>
                    <div className ={styles.productTitleDescPrice}> <div>5500Р</div> <div>10500Р</div> <div>-50%</div></div>
                </div>
            </div>
            <div className ={styles.productContent}>
                <div className = {styles.productContentDesc}>Цена упадет до <span>2000Р</span> если будет куплено</div>
                <div className ={styles.productContentInfo}>
                    <div className ={controls.mainInfoBlockWrap} style = {{width: '155px', height: '20px'}}>
                        <div>120шт</div>
                        <div>За 12:48:35</div>
                    </div>
                    <div className ={styles.productContentInfoCount}>Куплено: <span>90шт</span></div>
                </div>
            </div>
        </div>
    );
}

export default Product;
