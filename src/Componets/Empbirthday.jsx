import React from 'react'
import Data from './Data'
import Empdata from './Empdata'
import { Link } from 'react-router-dom';

const Empdetails = () => {
    return (
        <div className="container">
        <h3>Today Birthday</h3>
        <Empdata employee={Data} />
        <Link to="/empdetails"> Employee Details</Link>
            
        </div>
    )
}

export default Empdetails
