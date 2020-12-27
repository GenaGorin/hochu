import styles from '../../Sidebar.module.css';
import candy from '../../../../assets/images/candy.png';
import { NavLink } from 'react-router-dom';

function Collect() {
    return (
        <NavLink to='/collection'>
        <div className={styles.newCollectionSingle} style={{ backgroundImage: 'url(' + candy + ')' }}>
            <div>Новая коллекция</div>
        </div>
        </NavLink>
    );
}

export default Collect;
