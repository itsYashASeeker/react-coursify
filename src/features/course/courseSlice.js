import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllCourses = createAsyncThunk("", async () => {
    const rr = await axios.get("https://todolists-pora.onrender.com/getcourses/foryash", {
        headers: { 'Content-Type': "application/json", },
    })
        .then((data) => {
            return data.data;
        })
    return rr;
})


export const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        value: [],
    },
    reducers: {
        fetchCourses: (state) => {
            // state.value = getAllCourses();


            // state.value = {
            //     "id": 81,
            //     "name": "Cybersecurity Essentials",
            //     "instructor": "Olivia Turner",
            //     "description": "Learn the fundamental principles of cybersecurity and protect against cyber threats.",
            //     "enrollmentStatus": "Open",
            //     "thumbnail": "your.image.here",
            //     "duration": "8 weeks",
            //     "schedule": "Tuesdays and Thursdays, 7:30 PM - 9:30 PM",
            //     "location": "Virtual Classroom",
            //     "prerequisites": ["Basic understanding of computer networks", "Intro to Information Security"],
            //     "syllabus": [
            //         {
            //             "week": 1,
            //             "topic": "Introduction to Cybersecurity",
            //             "content": "Overview of cybersecurity, common threats, and security measures."
            //         },
            //         {
            //             "week": 2,
            //             "topic": "Network Security",
            //             "content": "Understanding and implementing network security protocols."
            //         }
            //     ],
            //     "students": [
            //         {
            //             "id": 901,
            //             "name": "Liam Rodriguez",
            //             "email": "liam@example.com"
            //         },
            //         {
            //             "id": 902,
            //             "name": "Nora Davis",
            //             "email": "nora@example.com"
            //         }
            //     ]
            // };
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            state.value = action.payload;
        })
        // []:
    }
})



export const { fetchCourses } = courseSlice.actions;

export default courseSlice.reducer;

export const selectCourses = (state) => state.courses.value;







