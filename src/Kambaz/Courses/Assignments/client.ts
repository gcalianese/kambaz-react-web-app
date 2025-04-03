import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const getAssignments = async () => {
    const { data } = await axios.get(`${ASSIGNMENTS_API}`);
    return data;
};

export const getAssignmentsForCourse = async (cid : any) => {
    const { data } = await axios.get(`${ASSIGNMENTS_API}/${cid}`);
    return data;
};

export const getAssignment = async (cid : any, aid : any) => {
    const { data } = await axios.get(`${ASSIGNMENTS_API}/${cid}/${aid}`);
    return data;
};

export const createAssignment = async (assignment : any) => {
    const { data } = await axios.post(`${ASSIGNMENTS_API}`, assignment);
    console.log("creating assignment: " + JSON.stringify(assignment))
    return data;
};

export const updateAssignment = async (assignment : any) => {
    const { data } = await axios.put(`${ASSIGNMENTS_API}`, assignment);
    return data;
};

export const deleteAssignment = async (cid : any, aid : any) => {
    const { data } = await axios.delete(`${ASSIGNMENTS_API}/${cid}/${aid}`);
    return data;
};
