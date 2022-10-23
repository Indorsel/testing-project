import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/" data-testid="main-link"><p>Main</p></Link>
      <Link to="/about" data-testid="about-link"><p>About</p></Link>
      <Link to="/users" data-testid="users-link"><p>Users</p></Link>
    </div>
  );
};

export default Navbar;