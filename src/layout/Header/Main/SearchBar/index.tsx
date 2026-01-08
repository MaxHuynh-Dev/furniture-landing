import TextV2 from '@/components/TypoV2';
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
        <TextV2 size={14} weight="semibold" color="white">
          Search
        </TextV2>
      </button>
    </div>
  );
}

export default SearchBar;
