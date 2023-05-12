import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authcontext";

import "./sign-in-form.styles.css";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="sign-in-form-container container-fluid">
      <h1>Sign In Form!</h1>
      <h2>Sign in to your account.</h2>
      <p>
        Don't have an account? <Link to="/">Sign up.</Link>
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
