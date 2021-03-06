import { GetStaticProps } from 'next';
import { ChangeEvent, useState } from 'react';
import CountriesTable from '../components/Countries';
import Layout from '../components/Layout';
import SearchInput from '../components/SearchInput';
import styles from '../styles/Home.module.css';

interface ICountry {
  name: string;
  region: string;
  subregion: string;
}

export default function Home({ countries }: any) {
  const [keyword, setKeyword] = useState<string>('');
  const filteredCountries = countries.filter((country: ICountry) => country.name.toLowerCase().includes(keyword) || country.region.toLowerCase().includes(keyword) || country.subregion.toLowerCase().includes(keyword));

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  }
  return (
    <Layout title="World Ranks">
      <div className={styles.inputContainer}>
        <div className={styles.counts}>Found {countries.length} countries</div>
        <div className={styles.input}>
          <SearchInput placeholder="Filter by Name, Region or SubRegion" onChange={onInputChange} />
        </div>
      </div>
      <CountriesTable countries={filteredCountries} />
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();

  return {
    props: {
      countries
    }
  }
}