let Promise = require('promise');
let LoginModel = require('../database/loginModel');
let StudentLogin = require('../database/student');

let saveAdminLogin = parameter => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            let loginmodel = new LoginModel(parameter);
            loginmodel.save()
                .then((data) => {
                    if (data) {
                        resolve(data);
                    } else {
                        resolve(false);
                    }
                });
        } else {
            resolve(false);
        }
    });
};

let saveStudentLogin = parameter => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            let loginmodel = new LoginModel(parameter);
            loginmodel.save()
                .then((data) => {
                    if (data) {
                        resolve(data);
                    } else {
                        resolve(false);
                    }
                });
        } else {
            resolve(false);
        }
    });
};

let getAdminLogin = () => {
    return new Promise((resolve, reject) => {
        LoginModel.find({ isAdmin: true })
            .exec()
            .then((data) => {
                if (data) {
                    resolve(data);
                } else {
                    resolve(false);
                }
            });
    });
};

let getStudentLogin = () => {
    return new Promise((resolve, reject) => {
        LoginModel.find({ isStudent: true })
            .exec()
            .then((data) => {
                if (data) {
                    resolve(data);
                } else {
                    resolve(false);
                }
            });
    });
};


let checkAdminLogin = (parameter) => {
    let returnParameter = {};
    return new Promise((resolve, reject) => {
        LoginModel.find({ userId: parameter.userId, isAdmin:parameter.isAdmin })
            .exec()
            .then((data) => {
                if (data[0]) {

                    if (data[0].userId === parameter.userId && data[0].password === parameter.password && data[0].isAdmin === true) {

                        returnParameter = {
                            _id : data[0]._id,
                            isAdmin:data[0].isAdmin
                        }
                        resolve(returnParameter);

                    } else {
                        resolve(false)
                    }
                } else {
                    resolve(false);
                }
            });
    });
};

let checkStudentLogin = (parameter) => {
    let returnParameter = {};
    return new Promise((resolve, reject) => {
        StudentLogin.find({ userId: parameter.userId, isStudent:parameter.isStudent })
            .exec()
            .then((data) => {
                if (data[0]) {

                    if (data[0].userId === parameter.userId && data[0].password === parameter.password && data[0].isStudent === true) {
                        returnParameter = {
                            _id : data[0]._id,
                            name:data[0].studentName,
                            isStudent:data[0].isStudent
                        }
                        resolve(returnParameter);
                    } else {
                        resolve(false)
                    }
                } else {
                    resolve(false);
                }
            });
    });
};



module.exports = {
    saveAdminLogin: saveAdminLogin,
    saveStudentLogin: saveStudentLogin,
    getAdminLogin: getAdminLogin,
    getStudentLogin: getStudentLogin,
    checkAdminLogin: checkAdminLogin,
    checkStudentLogin:checkStudentLogin

}