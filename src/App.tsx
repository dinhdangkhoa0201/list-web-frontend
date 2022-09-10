import React from 'react';
import "antd/dist/antd.css"
import "@ant-design/compatible/assets/index.css";
import {AdminLayout} from "./components/AdminLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFound} from "./components/NotFound";
import {Unauthorized} from "./components/Unauthorized";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} element={<AdminLayout/>}/>
                    <Route path={"/not-found"} element={<NotFound/>}/>
                    <Route path={"/unauthorized"} element={<Unauthorized/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
