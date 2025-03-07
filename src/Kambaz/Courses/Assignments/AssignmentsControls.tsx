import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { addAssignment, updateAssignment, deleteAssignment }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentsControls() {
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { cid } = useParams();
    const navigate = useNavigate();

    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <Button
                variant="danger"
                size="lg"
                className="me-1 float-end"
                onClick={() => {
                        const id = uuidv4()
                        dispatch(addAssignment({course : cid, _id : id}));
                        navigate(`/Kambaz/Courses/${cid}/Assignments/${id}`);
                }}
            >
                <FaPlus /> Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end">
                <FaPlus /> Group
            </Button>
        </div >
    );
}