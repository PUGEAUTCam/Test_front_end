import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from './views';
import ClaimPage from './views/claim';
import CreateClaim from './views/createClaim';
import InfosPage from './views/infos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route
                    path="/"
                    element={<IndexPage />}
                />
                <Route
                    path="/claim"
                    element={<ClaimPage />}
                />
                <Route
                    path="/newClaim"
                    element={<CreateClaim />}
                />
                <Route
                    path="/info"
                    element={<InfosPage />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
