import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const ContactForm: FC = () => (
  <div>
    <h1>Contact form</h1>
    <NavLink to="/">return to contact </NavLink>
  </div>
);
export default ContactForm;
