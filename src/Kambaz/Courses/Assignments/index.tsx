import { ListGroup } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons"
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuNotebookPen } from "react-icons/lu";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <table>
        <tr>
          <td><HiMagnifyingGlass /><input placeholder="Search..." id="wd-search-assignment" /></td>
          <AssignmentsControls /><br /><br /><br /><br />
        </tr>
      </table>
      <div>

        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> Assignments <AssignmentsControlButtons />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <LuNotebookPen className="wd-assignment-icon"/>
                <label className="wd-assignment-name">A1</label><br />
                <label className="wd-assignment-description"> Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</label>
                <LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> A2 <LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> A3 <LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>



      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A1 - ENV + HTML
          </a> </li>
        Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br />
        <b>Due</b> May 13 at 11:59pm | 100 pts
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A2 - CSS + BOOTSTRAP
          </a>
        </li>
        Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <br />
        <b>Due</b> May 20 at 11:59pm | 100 pts
        <li>
          <a href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link" >
            A3 - JAVASCRIPT + REACT
          </a>
        </li>
        Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <br />
        <b>Due</b> May 27 at 11:59pm | 100 pts
      </ul>
    </div>
  );
}
