import React, { PureComponent } from 'react';



class  Login extends PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();
        const login = e.target.login.value;
        const password = e.target.password.value;
        console.log(login, password);
        this.props.setPage('map');
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="login" />
                <input type="password" name="password" />
                <input type="submit" value="login" />
            </form>
        );
    }

}

export default Login;
