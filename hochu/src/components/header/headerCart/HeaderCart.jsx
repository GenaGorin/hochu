import styles from '../Header.module.css';
import cartIcon from '../../../assets/images/cart.png';
import { NavLink } from "react-router-dom";

function HeaderCart() {
    let count = 10;
    return (
        <div className={styles.headerCartRound}>
            <NavLink to="/cart">
                <div>
                    {count}
                </div>
                <img src={cartIcon} alt="Search" />
            </NavLink>
        </div>
    );
}

export default HeaderCart;
