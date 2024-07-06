import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import css from "./ContactsPage.module.css";
import DocumentTitle from "../../components/DocumentTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ContactList from "../../components/ContactList/ContactList";
import TotalContacts from "../../components/TotalContacts/TotalContacts";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.main}>
      <DocumentTitle>Contacts</DocumentTitle>
      <h2 className={css.title}>PHONEBOOK</h2>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {!error && !loading && (
        <>
          <ContactForm />
          <SearchBox />
          <TotalContacts />
          <ContactList />
        </>
      )}
    </main>
  );
}
