import decode from 'jwt-decode';

export default class AuthenticationService {
    constructor() {
        this.getProfile = this.getProfile.bind(this)
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            return decoded.exp < Date.now() / 1000;
        } catch (err) {
            return false;
        }
    }

    setToken(token) {
        localStorage.setItem('token', token)
    }

    getToken() {
        return localStorage.getItem('token')
    }

    logout() {
        localStorage.removeItem('token');
    }

    getProfile() {
        try {
            return decode(this.getToken());
        } catch (exception) {
            return null;
        }
    }

    getUserId() {
        if (this.getProfile() == null)
            this.logout();

        return this.getProfile().nameid
    }
}