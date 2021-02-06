import apiStrings from "../../assets/strings/apiStrings";
import AuthenticationService from "../AuthenticationService";

let authenticationService = new AuthenticationService();

let baseUrl;

class AccessApi {
    constructor(apiName) {
        this.determineWhichConnectionStringToUse(apiName);
    }

    determineWhichConnectionStringToUse(apiName) {
        let result = apiStrings.find(apiString => {
            return apiString.name === apiName
        });

        baseUrl = window.location.href.includes("localhost")
            ? result.development
            : window.location.href.includes("test.sartainstudios.com")
                ? result.test
                : result.production
    }

    getData(urlExtension) {
        let completeUrl = baseUrl + urlExtension;

        const headers = {'Authorization': 'Bearer ' + authenticationService.getToken()};

        const options = { headers: headers};

        return this.fetch(completeUrl, options)
    }

    putData(urlExtension, data) {
        const completeUrl = baseUrl + urlExtension;

        const httpMethod = 'PUT';

        const headers = {
            'Authorization': 'Bearer ' + authenticationService.getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        const body = JSON.stringify(data);

        const options = {method: httpMethod, headers: headers, body: body};

        return this.fetch(completeUrl, options)
    }

    postData(urlExtension, data) {
        const completeUrl = baseUrl + urlExtension;

        const httpMethod = 'POST';

        const headers = {
            'Authorization': 'Bearer ' + authenticationService.getToken(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };

        const body = JSON.stringify(data);

        const options = {method: httpMethod, headers: headers, body: body};

        return this.fetch(completeUrl, options)
    }

    postFormData(urlExtension, data) {
        const completeUrl = baseUrl + urlExtension;

        const httpMethod = 'POST';

        const headers = {'Authorization': 'Bearer ' + authenticationService.getToken()};

        const body = data;

        const options = {method: httpMethod, headers: headers, body: body};

        return this.fetch(completeUrl, options)
    }

    deleteData(urlExtension) {
        const completeUrl = baseUrl + urlExtension;

        const httpMethod = 'Delete';

        const headers = {'Authorization': 'Bearer ' + authenticationService.getToken()};

        const options = {method: httpMethod, headers: headers};

        return this.fetch(completeUrl, options)
    }

    fetch(completeUrl, options) {
        return new Promise(function (resolve) {
                fetch(completeUrl, options)
                    .then(res => res.json())
                    .then((result) => {
                            return resolve(result)
                        },
                        (error) => {
                            return resolve(error)
                        });
            }
        )
    }
}

export default AccessApi;