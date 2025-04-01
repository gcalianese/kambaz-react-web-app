import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteAssignmentR } from "./reducer";
import * as assignmentClient from "./client"


export default function AssignmentDelete({ show, handleClose, dialogTitle, assignment, }: {
    show: boolean; handleClose: () => void; dialogTitle: string; assignment: any;
}) {
    const dispatch = useDispatch()
    
    const deleteAnAssignment = async (a : any) => {
        await assignmentClient.deleteAssignment(a.course, a._id)
        dispatch(deleteAssignmentR({assignment : a}))
      };
      
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{dialogTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                <Button variant="primary"
                    onClick={() => {
                        deleteAnAssignment(assignment)
                        handleClose();
                    }} > Yes </Button>
            </Modal.Footer>
        </Modal>
    );
}
