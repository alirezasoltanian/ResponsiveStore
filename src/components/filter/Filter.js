import React from 'react'

import { RiFilter3Line } from 'react-icons/ri';
import { useState } from 'react';

//styles
import styles from './filter.module.css'
import { TextField } from '@mui/material';

export default function Filter({ searchHandler , setSearch , search , setFilterClose , filterClose , FilterHandler}) {
  
  
  return (
    <div className={styles.container}>
      
      <div className={styles.search}>
        <TextField
        label="Search"
        variant="outlined"
        type="text"
        value={search}
        onChange={searchHandler}
        />
          
      </div>
      <div className={styles.filtericon} >
      <p >filter</p>
      < RiFilter3Line className={styles.icon} onClick={FilterHandler} />
      </div>
      
      
    </div>
    
    
  )
}
