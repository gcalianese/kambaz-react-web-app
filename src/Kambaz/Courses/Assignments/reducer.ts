import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { assignments } from "../../Database";
import { getAssignments } from "./client";

type Assignment = {
    _id: string;
    title: string;
    course: string;
    available_dt: string;
    due_dt: string;
    until_dt: string;
    description: string;
    points: number;
};

const initialState: { assignments: Assignment[] } = {
    assignments: [],
  };
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignmentsR: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            const { course } = action.payload;
            const { _id } = action.payload;

            const newAssignment = {
                _id: _id,
                title: "New Assignment",
                course: course,
                available_dt: new Date().toISOString(),
                due_dt: new Date().toISOString(),
                until_dt: new Date().toISOString(),
                description: "Assignment Description",
                points: 100,
            };
            state.assignments = [...state.assignments, newAssignment]
        },
        deleteAssignment: (state, { payload: { assignment } }) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== assignment._id);
        },
        updateAssignmentR: (state, { payload: { assignment } }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? { ...a, ...assignment } : a);
        },
        editAssignmentId: (state, { payload: { assignment } }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? { ...a, ...assignment, _id: "A" + assignment._id } : a
            );
        },
    },
});

export const { setAssignmentsR, addAssignment, deleteAssignment, updateAssignmentR, editAssignmentId } =
    assignmentsSlice.actions;

export default assignmentsSlice.reducer;