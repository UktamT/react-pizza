import React from 'react'

import styles from './Search.module.scss'
import { SearchContext } from '../../App';

const Search  = () => {

  const {searchValue, setSearchValue} = React.useContext(SearchContext)

  console.log(searchValue);
  
  return (
    <div className={styles.flex}>
    <input 
     value={searchValue}
     onChange={(event) => setSearchValue(event.target.value)}
     className={styles.root}
     placeholder="Поиск..." 
    />
    {searchValue && <p className={styles.clear} onClick={() => setSearchValue('')}>x</p>}
    </div>
  )
}

export default Search;