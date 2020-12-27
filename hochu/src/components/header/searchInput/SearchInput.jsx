import styles from '../Header.module.css';
import lens from '../../../assets/images/lens.png'

function SearchInput() {
    return (
        <div className = {styles.inputWrap}>
            <input type="text" placeholder='Поиск товара, бренда, категории' />
            <div>
                <img src={lens} alt="Search" />
            </div>
        </div>
    );
}

export default SearchInput;
