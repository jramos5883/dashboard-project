import SignInForm from "../../components/sign-in-form/sign-in-form.comp";

import "./authpage.styles.css";

const AuthPage = () => {
  return (
    <div className="auth-container container-fluid">
      <h1>I am the Auth Page!</h1>
      <SignInForm />
    </div>
  );
};

export default AuthPage;
