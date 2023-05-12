import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authcontext";
import "./sign-up-form.styles.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUser(email, password);
      navigate("/dashboard");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="sign-in-form-container container-fluid">
      <h1>Sign Up Form!</h1>
      <h2>Sign up for a free account.</h2>
      <p>
        Already have an account? <Link to="auth">Sign in.</Link>
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
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
