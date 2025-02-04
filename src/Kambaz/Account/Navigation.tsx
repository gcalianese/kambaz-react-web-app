import { Link } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation">
            <Link to={'/Kambaz/Account/Signin'} className="active border border-0 wd-black-text wd-account-nav-link d-block mb-2 me-3"> Signin </Link>
            <Link to={'/Kambaz/Account/Signup'} className="border border-0 text-danger wd-account-nav-link d-block mb-2 me-3"> Signup </Link>
            <Link to={'/Kambaz/Account/Profile'} className="border border-0 text-danger wd-account-nav-link d-block mb-2 me-3"> Profile </Link>
        </div>
    );
}