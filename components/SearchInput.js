import styles from '../styles/SearchInput.module.css';
import { SearchRounded } from '@material-ui/icons';

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input className={styles.input} {...rest} />
    </div>
  );
}
 
export default SearchInput;