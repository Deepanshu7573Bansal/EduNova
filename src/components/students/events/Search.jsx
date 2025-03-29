import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from "../../../assets/images/Search.png";
import styles from "./search.module.css";

const Search=()=>{
     const [inputValue, setInputValue] = useState("");
    return(
        <div className={styles.Search}>
              <div className={styles.searchWrapper}>
                  <img 
                      src={searchIcon} 
                      alt="Search" 
                      className={styles.searchIcon} 
                    />
                    <input
                      type="text"
                      className={styles.searchInput}
                      placeholder="Search"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  
                  </div>
        </div>
    )
};

export default Search;