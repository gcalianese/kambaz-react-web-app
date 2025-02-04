import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control defaultValue="alice" placeholder="username" className="wd-username d-block mb-2" />
      <Form.Control defaultValue="123" placeholder="password" type="password"
        className="wd-password d-block mb-2" />
      <Form.Control defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="d-block mb-2"/>
      <Form.Control defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="d-block mb-2"/>
      <Form.Control placeholder="mm/dd/yyyy" type="date" id="wd-dob" className="d-block mb-2"/>
      <Form.Control defaultValue="alice@wonderland" type="email" id="wd-email" className="d-block mb-2"/>
      <Form.Select defaultValue="User" id="wd-role" className="d-block mb-2">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </Form.Select>
      <Link to="/Kambaz/Account/Signin"  className="btn btn-sign-out w-100 mb-2">Sign out</Link>
    </div>
  );
}
