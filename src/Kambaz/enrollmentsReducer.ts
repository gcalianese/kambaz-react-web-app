import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

const initialState: { enrollments: Enrollment[] } = {
    enrollments: [],
  };

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollmentsR: (state, action) => {
            state.enrollments = action.payload;
        },
        unenroll: (state, { payload: { user, course } }) => {
            state.enrollments = state.enrollments.filter((e) =>
                !(e.course === course._id && e.user === user._id)
            );
            console.log("After unenroll:", JSON.stringify(state.enrollments, null, 2));

        },
        enroll: (state, { payload: { user, course } }) => {
            const newEnrollment =
            {
                _id: uuidv4(),
                user: user._id,
                course: course._id
            }
            state.enrollments = [...state.enrollments, newEnrollment]
        },
    },
});

export const { setEnrollmentsR, unenroll, enroll } =
    enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;