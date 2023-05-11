import { Link } from "react-router-dom";
import "./sign-in-form.styles.css";

const SignInForm = () => {
  return (
    <div className="sign-in-form-container container-fluid">
      <h1>Sign In Form!</h1>
      <h2>Sign in to your account.</h2>
      <p>
        Don't have an account? <Link to="/">Sign up.</Link>
      </p>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
