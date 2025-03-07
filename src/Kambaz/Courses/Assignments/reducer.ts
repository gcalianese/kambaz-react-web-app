import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment = {
                _id: uuidv4(), 
                title: assignment.title, 
                course: assignment.course,
                available: assignment.available,
                due: assignment.due,
                until: assignment.until,
                available_dt: assignment.available_dt,
                due_dt: assignment.due_dt,
                until_dt: assignment.until_dt,
                description: assignment.description,
                points: assignment.points,
            };
            state.assignments.push(newAssignment);
        },
        deleteAssignment: (state, { payload: { id } }) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== id);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? { ...a, ...assignment } : a
            );
        },
        editAssignment: (state, { payload: { id } }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === id ? { ...a, editing: true } : a
            );
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentsSlice.actions;

export default assignmentsSlice.reducer;