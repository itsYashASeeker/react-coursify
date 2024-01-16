import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import { fetchCourses, getAllCourses, selectCourses } from "../features/course/courseSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const courses = useSelector(selectCourses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [sscourses, setSSCourses] = useState(courses);
    const [courseN, setCourseN] = useState(true);

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

    useEffect(() => {
        setSSCourses(courses);
    }, [courses]);

    function handleSearch(val) {
        var dumC = [];
        var nn = false;
        for (var i = 0; i < courses.length; i++) {
            if (courses[i].name.toLowerCase().includes(val.toLowerCase()) || courses[i].instructor.toLowerCase().includes(val.toLowerCase())) {
                nn = true;
                dumC.push(courses[i]);
            }
        }
        setCourseN(nn);
        setSSCourses(dumC);
    }

    return (
        <>
            <Navbar />
            <div className="fbg">
                <div className="divf">
                    <input className="searchCourse" placeholder="Search..." onChange={(e) => { handleSearch(e.target.value) }} />
                </div>

                {sscourses && sscourses.length ?
                    <div className="divf allCourses">
                        {sscourses.map((el) => {
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
                    <>
                        {
                            courseN ?
                                <div className="divf">
                                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                </div> : <></>
                        }
                    </>

                }
                {courseN ?
                    <></> :
                    <div className="divf" style={{ "width": "100%" }}>
                        <h3 style={{ "color": "red" }}>Course not found</h3>
                    </div>
                }
            </div >
        </>
    )
}