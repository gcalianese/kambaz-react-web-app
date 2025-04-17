import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const getAssignments = async () => {
    const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}`);
    return data;
};

export const getAssignmentsForCourse = async (cid : any) => {
    const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${cid}`);
    return data;
};

export const getAssignment = async (cid : any, aid : any) => {
    const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${cid}/${aid}`);
    return data;
};

export const createAssignment = async (assignment : any) => {
    const { data } = await axiosWithCredentials.post(`${ASSIGNMENTS_API}`, assignment);
    return data;
};

export const updateAssignment = async (assignment : any) => {
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}`, assignment);
    return data;
};

export const deleteAssignment = async (cid : any, aid : any) => {
    const { data } = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${cid}/${aid}`);
    return data;
};
