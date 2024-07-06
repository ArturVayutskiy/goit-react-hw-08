import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main>
      <DocumentTitle>Home Page</DocumentTitle>
      <h1 className={css.main}>Welcome to Phone Book!</h1>
    </main>
  );
}
