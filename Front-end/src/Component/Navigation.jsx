import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='d-flex align-items-center justify-content-left'>
        <h3 className='px-5'>Logo</h3>
        <ul className=' h-100 d-flex align-items-center justify-content-left'>
            <li><Link to='/' >Visitor</Link></li>
            <li><Link to='/User' >User</Link></li>
            <li><Link to='/Login' >Login</Link></li>
            <li><Link to='/Singup' >Singup</Link></li>
            <li><Link to='/Offer' >Offer</Link></li>
            <li><Link to='/Favorite' >Favorite</Link></li>
            <li><Link to='/Detaile' >Detaile</Link></li>
            {/* Add more links as needed */}
        </ul>

    </nav>
  );
};

export default Navigation;
