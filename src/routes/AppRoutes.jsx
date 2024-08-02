import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from '../Projects/Main'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes