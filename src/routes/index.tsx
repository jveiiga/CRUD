import {  Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Blog } from "../pages/Blog";

export const RoutesMain = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="blog"element={<Blog />}/>
            </Routes>
        </>
    )
}