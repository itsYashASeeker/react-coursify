import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import { fetchCourses, getAllCourses, selectCourses } from "../features/course/courseSlice";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CourseDetails() {
    const courses = useSelector(selectCourses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const timer = ms => new Promise((r) => setTimeout(r, ms));

    const id = useParams().id;

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
            <div className="divf fdirc fbg">

                {courses && courses.length ?
                    <div className="divf fdirc courseDetails">
                        <div className="divf fdirc upperDetailsMainCard">
                            <button className="goBackButton" onClick={() => { navigate("/") }}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <p className="divf courseDetailsName">{courses[id - 1].name}</p>
                            <p className="courseInstDetails">Instructor: {courses[id - 1].instructor}</p>
                        </div>
                        <div className="divf fdirc midDetailsMainCard">
                            <p className="courseDetailsDesc"><span className="undText">About the Course</span>: {courses[id - 1].description}</p>
                            <div className="divf rr1">
                                <p><span className="undText">Enrollment Status</span>: {courses[id - 1].enrollmentStatus}</p>
                                <p><span className="undText">Course Duration</span>: {courses[id - 1].duration}</p>
                            </div>
                            <div className="divf rr1">
                                <p><span className="undText">Schedule</span>: {courses[id - 1].schedule}</p>
                                <p><span className="undText">Location</span>: {courses[id - 1].location}</p>
                            </div>
                            <div className="divf rr1">
                                <p><span className="undText">Prerequisites</span>: {courses[id - 1].prerequisites.map((el, i) => {
                                    return (
                                        <span>{el}{i != (courses[id - 1].prerequisites.length - 1) ?
                                            <span>, </span> : <></>
                                        }</span>

                                    )
                                })}</p>
                            </div>
                            <details className="divf rr1">
                                <summary>Syllabus</summary>
                                <div className="divf fdirc allSyllabus">
                                    {courses[id - 1].syllabus.map((el) => {
                                        return (
                                            <div className="syllabusCard">
                                                <p className="weekNum">Week {el.week}</p>
                                                <p className="weekTopic">{el.topic}</p>
                                                <p>{el.content}</p>
                                            </div>
                                        )

                                    })}
                                </div>
                            </details>
                        </div>
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