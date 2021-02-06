import AccessAPI from "./AccessApi";

class AccessApiWrapper extends AccessAPI {
    getData(item) {
        return super.getData(item);
    }

    putData(urlExtension, data) {
        return super.putData(urlExtension, data);
    }

    postData(urlExtension, data) {
        return super.postData(urlExtension, data);
    }

    postFormData(urlExtension, data) {
        return super.postFormData(urlExtension, data);
    }

    deleteData(urlExtension, uid) {
        return super.deleteData(urlExtension, uid);
    }
}

export default AccessApiWrapper;
