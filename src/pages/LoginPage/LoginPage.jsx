import DocumentTitle from "../../components/DocumentTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <main>
      <DocumentTitle>Login</DocumentTitle>
      <h2 className={css.title}>LOGIN FORM</h2>
      <LoginForm />
    </main>
  );
}
