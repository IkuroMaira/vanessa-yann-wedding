import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layouts/HomeLayout.jsx";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}