import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Nav: FC = () => (
  <nav>
    <NavLink to="form">Contact form</NavLink>
    <NavLink to="chat">Contact Chat</NavLink>
  </nav>
);
export default Nav;
