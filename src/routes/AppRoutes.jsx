import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Counter from '../Projects/counter/Counter'
import Main from '../Projects/Main'
import TodoCreate from '../Projects/todo/TodoCreate'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Counter />} />
                    <Route index element={<TodoCreate />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default AppRoutes