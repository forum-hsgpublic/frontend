// src/components/Comments.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Comments() {
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState('');
    const [postId, setPostId] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await api.get('/comments/');
            setComments(response.data);
        } catch (error) {
            console.error("댓글을 가져오는 중 오류 발생:", error);
        }
    };

    const createComment = async () => {
        try {
            const newComment = { content, post_id: postId, user_id: userId };
            await api.post('/comments/', newComment);
            setContent('');
            setPostId('');
            setUserId('');
            fetchComments();
        } catch (error) {
            console.error("댓글을 생성하는 중 오류 발생:", error);
        }
    };

    const deleteComment = async (commentId) => {
        try {
            await api.delete(`/comments/${commentId}/`);
            fetchComments();
        } catch (error) {
            console.error("댓글을 삭제하는 중 오류 발생:", error);
        }
    };

    return (
        <div>
            <h2>댓글 관리</h2>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="댓글 내용"
            />
            <input
                type="text"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
                placeholder="게시물 ID"
            />
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="사용자 ID"
            />
            <button onClick={createComment}>댓글 생성</button>

            <ul>
                {comments.map((comment) => (
                    <li key={comment.comment_id}>
                        {comment.content}
                        <button onClick={() => deleteComment(comment.comment_id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;