import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";
const initialState = {
    enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        unenroll: (state, { payload: { course } }) => {
            state.enrollments = state.enrollments.filter((c: any) => c._id !== course._id);
        },
        enroll: (state, { payload: { course }}) => {  
            state.enrollments = state.enrollments.map((c: any) =>
                c._id === course._id ? { ...c, ...course } : c);
        },
    },
});

export const { unenroll, enroll } =
    enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;