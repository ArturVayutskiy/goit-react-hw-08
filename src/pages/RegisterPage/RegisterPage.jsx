import DocumentTitle from "../../components/DocumentTitle";
import { RegisterForm } from "../../components/RegistrationForm/RegisterForm";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <h2 className={css.title}>REGISTRATION FORM</h2>
      <RegisterForm />
    </div>
  );
}
