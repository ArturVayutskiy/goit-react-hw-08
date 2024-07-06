import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { GoHomeFill } from "react-icons/go";
import { TiContacts } from "react-icons/ti";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <GoHomeFill size="30px" />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <TiContacts size="23px" />
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
