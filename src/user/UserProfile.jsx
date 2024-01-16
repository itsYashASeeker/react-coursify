import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import { fetchCourses, getAllCourses, selectCourses } from "../features/course/courseSlice";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Course1 from "../assets/course2.png";

export default function UserProfile() {
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
            <div className="divf fdirc fbg">

                {courses && courses.length ?
                    <div className="divf fdirc courseDetails">
                        <div className="divf fdirc upperDetailsMainCard">
                            <button className="goBackButton" onClick={() => { navigate("/") }}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <p className="divf courseDetailsName">Yash Chauhan</p>
                        </div>
                        <div className="divf fdirc midDetailsMainCard">
                            <p className="coursesEnT">Courses Enrolled:</p>
                            <div className="divf fdirc allSyllabus allEnrolledCourse">
                                {courses.map((el, i) => {
                                    return (
                                        <div className="divf fdirc courseEnrolledCard">
                                            <img src={Course1} className="courseThumb" />
                                            <div className="divf fdirc innerCECard">
                                                <div className="divf fdirc alStart userCourseMainC">
                                                    <p className="userCourseEName ">{el.name}</p>
                                                    <p className="weekTopic">{el.instructor}</p>
                                                </div>
                                                <div className="divf">
                                                    <p className="userCourseDueDate">Due Date: 26/01/2024</p>
                                                </div>
                                                <div id={i + "Progress"} className="divf UserCDueProgress">

                                                    <div className="divf userCourseProgress">Progress:
                                                        <div className="progressBar"></div>
                                                    </div>
                                                    <button className="userCourseMarkCom" onClick={() => { document.getElementById(i + "Progress").classList.add("dNone"); document.getElementById(i + "IsCompleted").classList.remove("dNone"); }}>Mark as Completed</button>
                                                </div>
                                                <div id={i + "IsCompleted"} className="divf dNone">
                                                    <p className="userCourseCompleted">Course Completed</p>
                                                </div>

                                            </div>
                                        </div>
                                    )

                                })}
                            </div>
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