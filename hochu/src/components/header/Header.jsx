import styles from './Header.module.css';
import location from '../../assets/images/location.png';
import SearchInput from './searchInput/SearchInput';
import HeaderCart from './headerCart/HeaderCart';
import avatar from '../../assets/images/ava.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={styles.headerWrap}>
            <h2 className={styles.headerTitle}>
                <NavLink to ='/'>Cezyo</NavLink>
            </h2>
            <div className={styles.headerLocation}>
                <img src={location} alt="Location" />
                <div>Александровск-Са...</div>
            </div>
            <div className={styles.headerSearch}>
                <SearchInput />
            </div>
            <div className={styles.headerCart}>
                <HeaderCart />
            </div>
            <div className={styles.headerAva}>
                <img src={avatar} alt="Avatar"/>
            </div>
        </div>
    );
}

export default Header;
