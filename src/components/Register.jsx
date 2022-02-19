import { useState } from "react";
// import Login from "./Login";
import { Link } from "react-router-dom";

function Register(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});
  const baseURL = "http://localhost/user/registeruser";

  const handleUserChange = (e) => setUser(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: user,
      password: password,
    });
    console.log(payload);
    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    setResponse(res);
  };
  if (props.user) {
    return (
      <div className="already-logged-route">
        <div className=""></div>
        <div className="already-in">
          <p>You are already logged in!</p>
          <Link to="/login">
            <button className="takemeback">Take me back to login..</button>
          </Link>
        </div>
      </div>
    );
  }

  if (response.status === 401) {
    return (
      <>
        <div className="already-registered">
          <div className="already-reg">
            <p>User {user} is already registered!</p>
            <Link to="/login">
              <button className="tryagain">
                Please try registering again.
              </button>
            </Link>
            <h5>or</h5>

            <Link to="/">
              <button className="leavesite">Leave </button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  if (response.status === 201) {
    return (
      <>
        <div className="register-route">
          <div className="success">
            <p>Successfully registered! please login.</p>
            <Link to="/login">
              <button className="takemeback">Take me to login!</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="register">
        <h1 className="registerPage">Please sign up below:</h1>
        <form className="registerForm" onSubmit={submitForm}>
          <label htmlFor="user">Username:</label>
          <input
            type="text"
            name="user"
            value={user}
            onChange={handleUserChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Link to="/login">
            <input className="submit" type="submit" value="Submit" />
          </Link>
          <h3>Already have an account? Sign in Here...</h3>
          <Link to="/login">
            <button className="loginlink">Login</button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
