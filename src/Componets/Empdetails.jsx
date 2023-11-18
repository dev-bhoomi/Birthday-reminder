import React from 'react'
import EmpdataAll from './EmpdataAll'; 
import Data from './Data';
import { Link } from 'react-router-dom';

const Empdetails = () => {
  return (
    <div className='container'>
        <h3>Employee Birthday Details </h3>
        <EmpdataAll  employee={Data}/>
        <Link to="/empbirthday">Today Birthday </Link>
    </div>
  )
}

export default Empdetails
