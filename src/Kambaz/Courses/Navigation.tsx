import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { courses } from "../Database";

export default function CourseNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { pathname } = useLocation();

  return (

    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kambaz/Courses/${cid}/${link}`}
          id={`wd-${cid}-${link}-link`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? 'active' : 'text-danger'}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
