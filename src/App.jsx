// REACT IMPORTS
import React from 'react'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'

// PAGES
import NotFound from './pages/NotFound.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Teachers from './pages/Dashboard/Teachers.jsx'
import Profile from './pages/Dashboard/Profile.jsx'
import Subjects from './pages/Dashboard/Subjects.jsx'

// UTILS
import ScrollToTop from './utils/ScrollToTop.jsx'
import Layout from './containers/Layout.jsx'

function App() {

    return (
        <>
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="*" element={<Navigate to="/notfound" replace />} />
                    <Route path="/notfound" element={<NotFound />}></Route>

                    <Route index element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />

                    <Route path="/" element={<Layout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="teachers" element={<Teachers />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="subjects" element={<Subjects />} />

                    </Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default App