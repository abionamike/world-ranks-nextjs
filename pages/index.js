import CountriesTable from '../components/Countries';
import Layout from '../components/Layout';
import SearchInput from '../components/SearchInput';
import styles from '../styles/Home.module.css';

export default function Home({ countries }) {
  // console.log(countries);
  return (
    <Layout title="World Ranks">
      <div className={styles.counts}>Found {countries.length} countries</div>
      
      <SearchInput placeholder="Filter by Name, Region or SubRegion" />

      <CountriesTable countries={countries} />
    </Layout>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();

  return {
    props: {
      countries
    }
  }
}