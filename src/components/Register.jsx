import { useState } from "react";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost/user/registeruser";

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: user,
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
    console.log(await res.json());
  };
  return (
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
          type="text"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Register;
