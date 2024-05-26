import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface ContactFormProps {}
const ContactForm: FC<ContactFormProps> = () => {
  return (
    <div>
      <h1>Contact form</h1>
      <NavLink to="/">return to contact </NavLink>
    </div>
  );
};
export default ContactForm;
