let Promise = require('promise');
let StudentModel = require('../database/student');

let saveStudentRecord = parameter => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            let studentModel = new StudentModel(parameter);
            studentModel.save()
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


let getStudentRecord = () => {
    return new Promise((resolve, reject) => {
        StudentModel.find({ isStudent: true })
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

let getTopRecords = () => {
    return new Promise((resolve, reject) => {
        StudentModel.find({rank:{ $gt : 0 }}).sort({"rank":1}).limit(5)
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


let getStudentDetails = (id) => {
    let newparameter = {};
    return new Promise((resolve, reject) => {
        StudentModel.findById({ _id: id })
            .exec()
            .then((data) => {

                if (data) {
                    newparameter = {
                        _id: data._id,
                        studentName: data.studentName,
                        rank: data.rank,
                        studentClass: data.studentClass,
                        userId: data.userId,
                        isStudent: data.isStudent,
                        questionRecord:data.questionRecord
                    }
                    resolve(newparameter);
                } else {
                    resolve(false);
                }
            });
    });
};

let updateStudentRecord = (parameter) => {
    var id = parameter._id;
    return new Promise((resolve, reject) => {
        StudentModel.findByIdAndUpdate(id,{$set:parameter})
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

module.exports = {
    saveStudentRecord: saveStudentRecord,
    getStudentRecord: getStudentRecord,
    getTopRecords: getTopRecords,
    getStudentDetails: getStudentDetails,
    updateStudentRecord:updateStudentRecord
}