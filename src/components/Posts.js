// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await api.get('/posts/');
            setPosts(response.data);
        } catch (error) {
            console.error("게시물을 가져오는 중 오류 발생:", error);
        }
    };

    const createPost = async () => {
        try {
            const newPost = { title, content, category_id: category, user_id: userId };
            await api.post('/posts/', newPost);
            setTitle('');
            setContent('');
            setCategory('');
            setUserId('');
            fetchPosts();
        } catch (error) {
            console.error("게시물을 생성하는 중 오류 발생:", error);
        }
    };

    const deletePost = async (postId) => {
        try {
            await api.delete(`/posts/${postId}/`);
            fetchPosts();
        } catch (error) {
            console.error("게시물을 삭제하는 중 오류 발생:", error);
        }
    };

    return (
        <div>
            <h2>게시물 관리</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용"
            />
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="카테고리 ID"
            />
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="사용자 ID"
            />
            <button onClick={createPost}>게시물 생성</button>

            <ul>
                {posts.map((post) => (
                    <li key={post.post_id}>
                        {post.title} - {post.content}
                        <button onClick={() => deletePost(post.post_id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;