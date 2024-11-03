// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Users from './components/Users';
import Categories from './components/Categories';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Tags from './components/Tags';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/users">사용자 관리</Link></li>
                        <li><Link to="/categories">카테고리 관리</Link></li>
                        <li><Link to="/posts">게시물 관리</Link></li>
                        <li><Link to="/comments">댓글 관리</Link></li>
                        <li><Link to="/tags">태그 관리</Link></li>
                    </ul>
                </nav>

                <Routes>
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