import Product from './product/Product';
import Title from './title/Title';
import styles from '../Main.module.css';
import { useState } from 'react';

function ProductsList({title, description}) {
    let [arr, setArr] = useState([1,2,3,4]);
    const increaseArr =() =>{
        let newArr = [...arr, 1,2,3,4];
        setArr(newArr);
    }
    return (
        <div>
            <Title title= {title} description = {description} />
            <div className = {styles.productsWrap}>
                {
                    arr.map((item, i) => <Product key={i} />)
                }
            </div>
            <div className ={styles.showMoreBtnWrap}>
                <div onClick = {increaseArr}>Показать больше товаров</div>
            </div>
        </div>
    );
}

export default ProductsList;
