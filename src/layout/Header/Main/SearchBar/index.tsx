import type React from 'react';
import styles from './searchBar.module.scss';

function SearchBar(): React.ReactElement {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
