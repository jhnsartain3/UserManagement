import React, {Component} from "react";
import '../styles/iframecenter.css'
import AuthenticationService from "../adapters/AuthenticationService";
import connectionStrings from "../assets/strings/connectionStrings";

let authenticationService = new AuthenticationService();

class Authentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticationScreenSource: "sartainstudios.com"
        };

        this.setupListenerForIFrame();
        this.determineWhichConnectionStringToUse = this.determineWhichConnectionStringToUse.bind(this);
    }

    componentDidMount() {
        const authenticationService = new AuthenticationService();

        if (authenticationService.loggedIn()) {
            this.props.history.replace('/');
        }

        this.determineWhichConnectionStringToUse();
    }

    setupListenerForIFrame() {
        let eventMethod = window.addEventListener
            ? "addEventListener"
            : "attachEvent";
        let eventer = window[eventMethod];
        let messageEvent = eventMethod === "attachEvent"
            ? "onmessage"
            : "message";

        eventer(messageEvent, (e) => {
            let source = e.data.source;

            if (source === undefined && e.data.token !== null) {
                if (e.data.token.token !== undefined)
                    if (e.data.token.token.length > 75 && e.data.token.token.length < 100000) {
                        console.log('Received token from Api');
                        authenticationService.setToken(e.data.token.token)
                        console.log('Saved token to client');
                        this.props.history.replace('/');
                    } else
                        console.log('Something is wrong with the token ' + e.data.token.token)
                else
                    console.log('Something is wrong with the token ' + e.data.token.token)
            }
        });
    }

    determineWhichConnectionStringToUse() {
        let connectionStringName = "AuthenticationWeb";

        let result = connectionStrings.find(connectionString => {
            return connectionString.name === connectionStringName
        });

        console.log(result)
        console.log(connectionStrings)

        let authenticationScreenSource = window.location.href.includes("localhost")
            ? result.development
            : window.location.href.includes("test.sartainstudios.com")
                ? result.test
                : result.production

        this.setState({authenticationScreenSource: authenticationScreenSource});
    }

    render() {
        return (
            <div className={'container'}>
                <p align="center">
                    <iframe src={this.state.authenticationScreenSource} title="Login Screen" className="iframe"
                            frameBorder="0"/>
                </p>
            </div>
        );
    }
}

export default Authentication;