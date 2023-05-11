import SignUpForm from "../../components/sign-up-form/sign-up-form.comp";

import "./homepage.styles.css";

const HomePage = () => {
  return (
    <div>
      <h1>My Rolling Dashboard!</h1>
      <p>Improve your orginization and hit your peak performance!</p>
      <SignUpForm />
    </div>
  );
};

export default HomePage;
