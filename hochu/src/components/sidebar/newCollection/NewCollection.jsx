import styles from '../Sidebar.module.css';
import Collect from './collection/Collect';

function NewCollection() {
    let arr = [1, 2, 3];
    return (
        <div className={styles.newCollectionsWrap}>
            {arr.map(item => <Collect key = {item} />)}
        </div>
    );
}

export default NewCollection;
