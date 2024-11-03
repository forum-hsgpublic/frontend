// src/components/Users.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Users() {
    const [users, setUsers] = useState([]);
    const [loginId, setLoginId] = useState('');
    const [email, setEmail] = useState('');

    // 사용자 목록 로드
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users/');
            setUsers(response.data);
        } catch (error) {
            console.error("사용자 데이터를 가져오는 중 오류 발생:", error);
        }
    };

    const createUser = async () => {
        try {
            const newUser = { login_id: loginId, email };
            await api.post('/users/', newUser);
            setLoginId('');
            setEmail('');
            fetchUsers();
        } catch (error) {
            console.error("사용자를 생성하는 중 오류 발생:", error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            await api.delete(`/users/${userId}/`);
            fetchUsers();
        } catch (error) {
            console.error("사용자를 삭제하는 중 오류 발생:", error);
        }
    };

    return (
        <div>
            <h2>사용자 관리</h2>
            <input
                type="text"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                placeholder="로그인 ID"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
            />
            <button onClick={createUser}>사용자 생성</button>

            <ul>
                {users.map((user) => (
                    <li key={user.user_id}>
                        {user.login_id} ({user.email})
                        <button onClick={() => deleteUser(user.user_id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;