import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../src/index.css";
import "../src/navbar.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <div className="divf navbar">
                <div className="divf nav1">
                    <Link to="/" className="logo">Coursify</Link>

                </div>
                <div className="nav1 nav2">
                    <button onClick={() => { navigate("/user") }} className="userB"><FontAwesomeIcon icon={faUser} /></button>
                </div>

            </div>
        </>
    )
}