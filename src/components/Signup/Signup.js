import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Signup = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const surname = e.target.surname.value;
        console.log(password, name, email, surname );
        props.setPage('map');
    }


    return (
        <form onSubmit={handleSubmit}>
            <TextField type="email" name="email" required />
            <input type="text" name="name" />
            <input type="text" name="surname" />
            <input type="password" name="password" />
            <Button variant="contained" color="primary">
                Sign up
            </Button>
        </form>
    );

}

export default Signup;
