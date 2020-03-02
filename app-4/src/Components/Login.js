import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };

        this.loginUpdate = this.loginUpdate.bind(this);
    }

    userUpdate(name) {
        this.setState({username: name});

    }

    passUpdate(pass) {
        this.setState({password: pass});
    }

    loginUpdate() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }


    render() {
        return (
            <div>
                <input placeholder='username' onChange={e => this.userUpdate(e.target.value)} type='text'/>
                <input onChange={e => this.passUpdate(e.target.value)} type='text'/>
                <button onClick={this.loginUpdate}>Login</button>
            </div>
        );
    }

}



export default Login

