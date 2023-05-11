import { Link } from "react-router-dom";
import "./sign-up-form.styles.css";

const SignUpForm = () => {
  return (
    <div className="sign-in-form-container container-fluid">
      <h1>Sign Up Form!</h1>
      <h2>Sign up for a free account.</h2>
      <p>
        Already have an account? <Link to="auth">Sign in.</Link>
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
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
