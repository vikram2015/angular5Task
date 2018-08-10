let Promise = require('promise');
let NewFormModel = require('../database/newFormModel');


let saveNewFormData = (parameter) => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            let newFormModel = new NewFormModel(parameter);
            newFormModel.save().then(function (data) {
                if (data) {
                    resolve(data);
                } else {
                    resolve(false);
                }
            });
        } else {
            resolve(false);
        }
    })
}

let getFormUptoClassFive = (parameter) => {
    return new Promise((resolve, reject) => {
        NewFormModel.find({ classRange: '1to5' })
            .exec()
            .then((data) => {
                resolve(data);
            })
    })
}
let getFormUptoClassTen = (parameter) => {
    return new Promise((resolve, reject) => {
        NewFormModel.find({ classRange: '6to10' })
            .exec()
            .then((data) => {
                resolve(data);
            })
    })
}
let getFormUptoClassTwelve = (parameter) => {
    return new Promise((resolve, reject) => {
        NewFormModel.find({ classRange: '11to12' })
            .exec()
            .then((data) => {
                resolve(data);
            })
    })
}

let getClassForm = (parameter) => {
    return new Promise((resolve, reject) => {
        if (parameter < 6) {
            getFormUptoClassFive(parameter).then((data) => {
                resolve(data)
            })
        } else {
            if (parameter < 11) {
                getFormUptoClassTen(parameter).then((data) => {
                    resolve(data)
                })
            } else {
                if (parameter < 13) {
                    getFormUptoClassTwelve(parameter).then((data) => {
                        resolve(data)
                    })
                }
            }
        }
    })
}



let getClassRangeForm = (parameter) => {
    return new Promise((resolve, reject) => {
        NewFormModel.find({ classRange: parameter.classRange })
            .exec()
            .then((data) => {
                resolve(data);
            })
    })
}


module.exports = {
    saveNewFormData: saveNewFormData,
    getClassForm: getClassForm,
    getClassRangeForm: getClassRangeForm
}
