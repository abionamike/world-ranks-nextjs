import { KeyboardArrowDownRounded } from '@material-ui/icons';
import styles from '../styles/Countries.module.css';

const orderBy = (countries, direction) => {
  if(direction === 'asc') {
    return [...countries].sort((a, b) => (a.popluation > b.population ? 1 : -1));
  }

  if(direction === 'desc'){
    return [...countries].sort((a, b) => (a.population > b.population ? -1 : 1));
  }

  return countries;
}

const CountriesTable = ({ countries }) => {
  const orderedCountries = orderBy(countries, 'desc')
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Name</div>
          <div className={styles.heading_arrow}>
            <KeyboardArrowDownRounded color="inherit" />
          </div>
        </button>
        <button className={styles.heading_population}>
          <div>Population</div>
          <div className={styles.heading_arrow}>
            <KeyboardArrowDownRounded color="inherit" />
          </div>
        </button>
      </div>

      {orderedCountries.map((country) => (
        <div className={styles.row}>
          <div className={styles.name}>{country.name}</div>

          <div className={styles.popluation}>{country.population}</div>
        </div>))
      }
    </div>
  );
}
 
export default CountriesTable;