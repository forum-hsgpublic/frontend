// src/components/Tags.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Tags() {
    const [tags, setTags] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        fetchTags();
    }, []);

    const fetchTags = async () => {
        try {
            const response = await api.get('/tags/');
            setTags(response.data);
        } catch (error) {
            console.error("태그를 가져오는 중 오류 발생:", error);
        }
    };

    const createTag = async () => {
        try {
            const newTag = { name };
            await api.post('/tags/', newTag);
            setName('');
            fetchTags();
        } catch (error) {
            console.error("태그를 생성하는 중 오류 발생:", error);
        }
    };

    const deleteTag = async (tagId) => {
        try {
            await api.delete(`/tags/${tagId}/`);
            fetchTags();
        } catch (error) {
            console.error("태그를 삭제하는 중 오류 발생:", error);
        }
    };

    return (
        <div>
            <h2>태그 관리</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="태그 이름"
            />
            <button onClick={createTag}>태그 생성</button>

            <ul>
                {tags.map((tag) => (
                    <li key={tag.tag_id}>
                        {tag.name}
                        <button onClick={() => deleteTag(tag.tag_id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tags;