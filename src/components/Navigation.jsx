import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (

  <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', paddingTop: '.5rem' }}>
    <div>
      <NavLink 
        to="/datsumo"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      ><span>DATSUMO</span></NavLink>
    </div>
    <div>
      <NavLink 
        to="/skincare"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      ><span>SKINCARE</span></NavLink>
    </div>
    <div>
      <NavLink 
        to="/aga"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      ><span>AGA</span></NavLink>
    </div>
    <div>
      <NavLink 
        to="/diet"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      ><span>DIET</span></NavLink>
    </div>
    <div>
      <NavLink 
        to="/smellcare"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      ><span>SMELLCARE</span></NavLink>
    </div>
    <div>
      <NavLink 
        to="/homecare"
        className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
      ><span>HOMECARE</span></NavLink>
    </div>
  </nav>
  );
};

export default Navigation;