import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import { fetchCourses, getAllCourses, selectCourses } from "../features/course/courseSlice";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const courses = useSelector(selectCourses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const timer = ms => new Promise((r) => setTimeout(r, ms));

    useEffect(() => {
        // axios.get("http://localhost:3000/getcourses/foryash", {
        //     headers: { 'Content-Type': "application/json", },
        // })
        //     .then((data) => {
        //         // state.value = data.data;
        //         console.log(data.data);
        //     })
        //     .catch((err) => {

        //     })
        // if (courses.length == 0) {
        async function ff() {
            await timer(200);
            dispatch(getAllCourses());
        }
        ff();



        // }
    }, []);

    return (
        <>
            <Navbar />
            <div className="fbg">

                {courses && courses.length ?
                    <div className="divf allCourses">
                        {courses.map((el) => {
                            return (
                                <button onClick={() => { navigate("/courses/" + el.id) }} className="divf fdirc courseCard">
                                    <div className="divf fdirc upperMainCard">
                                        <p className="divf courseName">{el.name}</p>
                                        <p className="courseTeacher">{el.instructor}</p>
                                    </div>

                                    <p className="courseDesc">{el.description}</p>
                                </button>
                            )
                        })
                        }
                        {courses.map((el) => {
                            return (
                                <button onClick={() => { navigate("/courses/" + el.id) }} className="divf fdirc courseCard">
                                    <div className="divf fdirc upperMainCard">
                                        <p className="divf courseName">{el.name}</p>
                                        <p className="courseTeacher">{el.instructor}</p>
                                    </div>

                                    <p className="courseDesc">{el.description}</p>
                                </button>
                            )
                        })
                        }
                        {courses.map((el) => {
                            return (
                                <button onClick={() => { navigate("/courses/" + el.id) }} className="divf fdirc courseCard">
                                    <div className="divf fdirc upperMainCard">
                                        <p className="divf courseName">{el.name}</p>
                                        <p className="courseTeacher">{el.instructor}</p>
                                    </div>

                                    <p className="courseDesc">{el.description}</p>
                                </button>
                            )
                        })
                        }
                    </div>
                    :
                    <div className="divf">
                        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                }
            </div>
        </>
    )
}