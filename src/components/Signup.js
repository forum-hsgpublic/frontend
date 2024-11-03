// src/components/Signup.js
import React, { useState } from 'react';
import api from '../services/api';

function Signup() {
    const [loginId, setLoginId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/signup/', {
                login_id: loginId,
                email,
                password,
            });
            setMessage("회원가입이 완료되었습니다. 로그인하세요.");
        } catch (error) {
            console.error("회원가입 오류:", error);
            setMessage("회원가입에 실패했습니다.");
        }
    };

    return (
        <div>
            <h2>회원가입</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="로그인 ID"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    required
                />
                <button type="submit">회원가입</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Signup;