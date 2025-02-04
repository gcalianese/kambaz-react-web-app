import { FaPlus } from "react-icons/fa6";
import { Button, Dropdown } from "react-bootstrap";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function AssignmentsControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <Button variant="danger" size="lg" className="me-1 float-end">
                + Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end">
                + Group
            </Button>
        </div>
    );
}