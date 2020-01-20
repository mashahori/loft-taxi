import React from 'react';

const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const surname = e.target.surname.value;
    console.log(password, name, email, surname );
}

const  Signup = () => (
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input type="text" name="name" />
        <input type="text" name="surname" />
        <input type="password" name="password" />
        <input type="submit" value="signup" />
    </form>
);

export default Signup;
