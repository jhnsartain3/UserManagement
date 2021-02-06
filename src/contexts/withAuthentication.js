import React, {Component} from 'react';
import AuthenticationService from "../adapters/AuthenticationService";

export default function withAuthentication(AuthComponent) {
    const authenticationService = new AuthenticationService();

    return class AuthWrapped extends Component {
        constructor() {
            super();
            this.state = {
                user: null
            }
        }

        componentDidMount() {
            if (!authenticationService.loggedIn()) {
                this.props.history.replace('/login')
            } else {
                try {
                    const profile = authenticationService.getProfile();
                    this.setState({
                        user: profile
                    })
                } catch (err) {
                    authenticationService.logout();
                    this.props.history.replace('/login')
                }
            }
        }

        render() {
            if (this.state.user) {
                return (
                    <AuthComponent history={this.props.history} user={this.state.user}/>
                )
            } else {
                return null
            }
        }
    }
}
