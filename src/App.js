// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Breadcrumbs, Button } from "@mui/material";
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Users from './components/Users';
import Categories from './components/Categories';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Tags from './components/Tags';

function App() {
    return (
        <Router>
            <div>
                <Breadcrumbs aria-label="breadcrumb">
                    <Button variant="outlined" href="/signup">회원가입</Button>
                    <Button variant="outlined" href="/login">로그인</Button>
                    <Button variant="outlined" href="/profile">프로필</Button>
                </Breadcrumbs>

                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/tags" element={<Tags />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;