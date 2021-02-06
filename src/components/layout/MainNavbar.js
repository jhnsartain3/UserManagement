import React from "react";
import PropTypes from "prop-types";
import '../../styles/layout/stickynavbar.css'
import logo from '../../assets/images/usermanagement_logo.svg'
import AuthenticationService from "../../adapters/AuthenticationService";

const MainNavbar = () => {
    const authenticationService = new AuthenticationService();

    let profile =authenticationService.getProfile();

    let isGodUser = profile!==null &&profile['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'].includes('god');

    let isAdministratorUser = profile!==null &&profile['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'].includes('administrator');

    return (
        <nav className="navbar navbar-expand-sm fixed-top primary-color-dark navbar-dark container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo} width="100%" height="auto" alt="Time Tracker"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse" id="navbarCollapse">
                <ul className="navbar-nav nav-right">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                    </li>
                    {
                        (isGodUser || isAdministratorUser)
                            ? (
                                <li className="nav-item active">
                                    <a className="nav-link" href="/users">Users</a>
                                </li>
                            ) : ""
                    }
                    <li className="nav-item">
                        <a className="nav-link"
                           href="https://sartainstudios.com/EntityInformation?title=User%20Management">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={authenticationService.logout}>Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

MainNavbar.propTypes = {
    /**
     * The layout type where the MainNavbar is used.
     */
    layout: PropTypes.string,
    /**
     * Whether the main Navbar is sticky to the top, or not.
     */
    stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
    stickyTop: true
};

export default MainNavbar;
