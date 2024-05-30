import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface ContactProps {
  className?: string;
}
const Contact: FC<ContactProps> = ({ className }) => (
  <div className={className}>
    <h1>Contact</h1>
    <NavLink to="/">Return to home</NavLink>
  </div>
);

export default Contact;
