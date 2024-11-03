// src/components/Categories.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await api.get('/categories/');
            setCategories(response.data);
        } catch (error) {
            console.error("카테고리를 가져오는 중 오류 발생:", error);
        }
    };

    const createCategory = async () => {
        try {
            const newCategory = { name, description };
            await api.post('/categories/', newCategory);
            setName('');
            setDescription('');
            fetchCategories();
        } catch (error) {
            console.error("카테고리를 생성하는 중 오류 발생:", error);
        }
    };

    const deleteCategory = async (categoryId) => {
        try {
            await api.delete(`/categories/${categoryId}/`);
            fetchCategories();
        } catch (error) {
            console.error("카테고리를 삭제하는 중 오류 발생:", error);
        }
    };

    return (
        <div>
            <h2>카테고리 관리</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="카테고리 이름"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="설명"
            />
            <button onClick={createCategory}>카테고리 생성</button>

            <ul>
                {categories.map((category) => (
                    <li key={category.category_id}>
                        {category.name} - {category.description}
                        <button onClick={() => deleteCategory(category.category_id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;