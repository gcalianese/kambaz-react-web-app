import { Link } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation">
            <Link to={'/Kambaz/Account/Signin'} className="fs-5 wd-black-text wd-account-nav-link active d-block mb-2 ps-1 me-3 "> Signin </Link>
            <Link to={'/Kambaz/Account/Signup'} className="fs-5  text-danger wd-account-nav-link d-block mb-2 ps-1 me-3"> Signup </Link>
            <Link to={'/Kambaz/Account/Profile'} className="fs-5  text-danger wd-account-nav-link d-block mb-2 ps-1 me-3"> Profile </Link>
        </div>
    );
}