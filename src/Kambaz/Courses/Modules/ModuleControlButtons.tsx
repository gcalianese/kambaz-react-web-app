import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import LessonControlButtons from "./LessonControlButtons";
export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <BsPlus className="fs-4"/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}