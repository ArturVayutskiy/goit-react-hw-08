import css from "./Contact.module.css";
import { IoCallSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactList}>
      <p></p>
      <div className={css.contactContainer}>
        <p className={css.contactText}>
          <FaUser size={20} />
          {name}
        </p>
        <p className={css.contactText}>
          <IoCallSharp size={20} />
          {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
