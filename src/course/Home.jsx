import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar";
import { fetchCourses, getAllCourses, selectCourses } from "../features/course/courseSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Home() {

    const courses = useSelector(selectCourses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [sscourses, setSSCourses] = useState(courses);
    const [courseN, setCourseN] = useState(true);
    const [likes, setLikes] = useState([0, 0, 0, 0]);

    const timer = ms => new Promise((r) => setTimeout(r, ms));

    useEffect(() => {
        async function f2() {
            await axios.get("https://todolists-pora.onrender.com/getcourses/likes", {
                headers: { 'Content-Type': "application/json", },
            })
                .then((data) => {
                    // state.value = data.data;
                    const dumD = data.data;
                    var dumL = likes;
                    for (var i = 0; i < dumD.length; i++) {
                        dumL[dumD[i].fId - 1] = dumD[i].likes;
                    }
                    setLikes([...dumL]);
                })
                .catch((err) => {

                })
        }
        f2();
        // if (courses.length == 0) {
        async function ff() {
            await timer(200);
            dispatch(getAllCourses());
        }
        ff();



        // }
    }, []);

    function addLike(i) {
        var i = Number(i);
        const fId = i + 1;
        const ll = likes[i] + 1;

        axios.post(`https://todolists-pora.onrender.com/getcourses/addLike/${fId}/${ll}`, {}, {
            headers: { 'Content-Type': "application/json", },
        })
            .then((data) => {
                // state.value = data.data;
                const dumD = data.data;
                var dumL = likes;
                for (var i = 0; i < dumD.length; i++) {
                    dumL[dumD[i].fId - 1] = dumD[i].likes;
                }
                console.log(dumD);
                setLikes([...dumL]);
            })
            .catch((err) => {

            })
    }

    useEffect(() => {
        setSSCourses(courses);
    }, [courses]);

    useEffect(() => {

    }, [likes]);

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
                {sscourses && likes && sscourses.length ?
                    <div className="divf allCourses">
                        {sscourses.map((el, i) => {
                            return (
                                <button onClick={() => { navigate("/courses/" + el.id) }} className="divf fdirc courseCard">
                                    <button className="divf likesDiv" onClick={(e) => { e.stopPropagation(); e.preventDefault(); addLike(i) }}>
                                        <span><FontAwesomeIcon icon={faHeart} /></span>
                                        <p> {likes[i]}</p>
                                    </button>
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