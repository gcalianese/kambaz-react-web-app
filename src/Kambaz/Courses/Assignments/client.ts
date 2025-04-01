import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

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
