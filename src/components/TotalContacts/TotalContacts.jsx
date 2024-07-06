import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { TiContacts } from "react-icons/ti";
import css from "./TotalContacts.module.css";

export default function TotalContacts() {
  const totalContacts = useSelector(selectContacts);
  const counter = totalContacts.length;
  return (
    <div className={css.wrapper}>
      <p className={css.counterWrapper}>
        <TiContacts size="30px" className={css.counter} /> You have{" "}
        <span className={css.span}>{counter}</span> contacts:
      </p>
    </div>
  );
}
