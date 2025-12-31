import Text from '@/components/Typo';
import { Search } from 'lucide-react';
import type React from 'react';
import styles from './searchBar.module.scss';

function SearchBar(): React.ReactElement {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar_icon}>
        <Search width={'2rem'} height={'2rem'} />
        <input type="text" placeholder="Search" className={styles.searchBar_input} />
      </div>
      <button className={styles.searchBar_button}>
        <Text size={14} weight="semibold" color="white">
          Search
        </Text>
      </button>
    </div>
  );
}

export default SearchBar;
