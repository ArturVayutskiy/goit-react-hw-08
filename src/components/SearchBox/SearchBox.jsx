import { selectNameFilter } from "../../redux/filter/selectors";
import { changeFilter } from "../../redux/filter/slice";
import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      <label className={css.searchTitle} htmlFor="search-field">
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        type="text"
        id="search-field"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
