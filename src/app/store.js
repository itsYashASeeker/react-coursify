import { configureStore } from '@reduxjs/toolkit'
import courseSlice from '../features/course/courseSlice'

export default configureStore({
    reducer: {
        courses: courseSlice,
    },
});