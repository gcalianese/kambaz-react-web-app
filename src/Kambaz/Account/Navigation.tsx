import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const links = [{ label: "Signin", path: "/Kambaz/Account/Signin" },
    { label: "Signup", path: "/Kambaz/Account/Signup" },
    { label: "Profile", path: "/Kambaz/Account/Profile" }];
    const { pathname } = useLocation();
    return (
        <div id="wd-account-navigation">
            {links.map((link) => (
                <Link to={link.path}
                id={`wd-account-${link.label}`}
                className={`fs-5 wd-account-nav-link d-block mb-2 ps-1 me-3 ${pathname.includes(link.label) ? "active wd-black-text" : "text-danger"}`}> {link.label} </Link>
            ))}
        </div>
    );
}