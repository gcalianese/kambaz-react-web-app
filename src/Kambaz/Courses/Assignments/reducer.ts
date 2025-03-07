import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { useNavigate } from "react-router";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            const { course } = action.payload; 

            const newAssignment = {
                _id: "NewAssignment",
                title: "New Assignment",
                course: course,
                available: new Date().toISOString(),
                due: new Date().toISOString(),
                until: new Date().toISOString(),
                available_dt: new Date().toISOString(),
                due_dt: new Date().toISOString(),
                until_dt: new Date().toISOString(),
                description: "Assignment Description",
                points: 100,
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