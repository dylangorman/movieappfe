import { useState } from "react";
// import "./App.css";
// import { Link } from "react-router-dom";
// import Home from "./Home";
function Login({ user, setUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost/user/userlogin";

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: userName,
      password: password,
    });
    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    const data = await res.json();
    setUser({ username: data.user.name, jwt: data.token });
    console.log(user);
  };

  return (
    <div className="login">
      <h1 className="loginpage">Please Login Here..</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="user">Username:</label>
        <input
          type="text"
          name="user"
          value={userName}
          onChange={handleUserName}
        />
        <label htmlFor="Password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <input
          className="submit"
          type="submit"
          value="Submit"
          // onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default Login;
