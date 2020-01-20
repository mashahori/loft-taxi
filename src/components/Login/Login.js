import React from 'react';

const handleSubmit = (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value;
    console.log(login, password);
}

const  Login = () => (
    <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <input type="submit" value="login" />
    </form>
);

export default Login;
