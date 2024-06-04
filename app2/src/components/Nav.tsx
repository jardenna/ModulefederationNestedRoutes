import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Nav: FC = () => (
  <nav>
    <NavLink to="/info">Contact form</NavLink>
    <NavLink to="/chat">Contact Chat</NavLink>
  </nav>
);
export default Nav;
