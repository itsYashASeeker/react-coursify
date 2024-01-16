import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./course/Home";
import CourseDetails from "./course/CourseDetails";
import UserProfile from "./user/UserProfile";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </HashRouter>
  )
}