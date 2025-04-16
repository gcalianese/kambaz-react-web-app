import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
    if (user === null) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  console.log("Remote server: " + REMOTE_SERVER)

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control id="wd-username"
        placeholder="username"
        className="mb-2"
        defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <Form.Control id="wd-password"
        placeholder="password" type="password"
        className="mb-2"
        defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <Button onClick={signin} id="wd-signin-btn" className="w-100" > Sign in </Button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
    </div>);
}
