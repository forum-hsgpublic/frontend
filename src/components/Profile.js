// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get('/profile/');
                setUser(response.data);
            } catch (error) {
                console.error("프로필을 가져오는 중 오류 발생:", error);
            }
        };
        fetchProfile();
    }, []);

    if (!user) return <p>로딩 중...</p>;

    return (
        <div>
            <h2>프로필</h2>
            <p>로그인 ID: {user.login_id}</p>
            <p>이메일: {user.email}</p>
            <p>가입일: {new Date(user.join_date).toLocaleDateString()}</p>
        </div>
    );
}

export default Profile;