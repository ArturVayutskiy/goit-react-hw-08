import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p>Page not found! </p>
      <Link to="/" className={css.link}>
        Back to Home page
      </Link>
    </div>
  );
}
