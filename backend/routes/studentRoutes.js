var express = require('express');
var router = express.Router();
var StudentController = require('../controller/studentController');

/**
 * Route for saving the new student record
 */
router.post('/registerNewStudent', (req, res) => {

    let studentName = req.body.studentName;
    let studentClass = req.body.class;
    let userId = req.body.userId;
    let password = req.body.password;
    let parameter = {};
    if (studentName && userId && password && studentClass) {
        if (studentClass < 6) {
            parameter = {
                studentName: studentName,
                rank: 0,
                studentClass: studentClass,
                userId: userId,
                password: password,
                isStudent: true,
                classRange: '1to5'
            }
        } else {
            if (studentClass < 11) {
                parameter = {
                    studentName: studentName,
                    rank: 0,
                    studentClass: studentClass,
                    userId: userId,
                    password: password,
                    isStudent: true,
                    classRange: '6to10'
                }
            } else {
                if (studentClass < 13) {
                    parameter = {
                        studentName: studentName,
                        rank: 0,
                        studentClass: studentClass,
                        userId: userId,
                        password: password,
                        isStudent: true,
                        classRange: '11to12'
                    }
                }
            }
        }
        // let parameter = {
        //     studentName: studentName,
        //     rank: 0,
        //     studentClass: studentClass,
        //     userId: userId,
        //     password: password,
        //     isStudent: true
        // }

        StudentController.saveStudentRecord(parameter).then((data) => {
            if (data) {
                res.send({ success: true, MSG: 'Student Record Saved Successfully', data: data });
            } else {
                res.send({ success: false, MSG: 'Student Record Not Saved', error: data });
            }
        });
    } else {
        res.send({ success: false, MSG: 'Something Went Wrong' });
    }
});




// router.get('/getStudentLogin',(req, res)=>{
//     StudentController.getStudentRecord().then((data)=>{
//         if(data){
//             res.send({success:true,MSG:'Student Login Data Found',data:data});
//         }else{
//             res.send({success:false,MSG:'Student Login Data Not Found',data:data})
//         }
//     });
// });

router.get('/getTopStudents', (req, res) => {
    // console.log(req.query)
    let parameter = {
        classRange: req.query.classRange
    }
    StudentController.getTopRecords(parameter).then((data) => {
        if (data) {
            res.send({ success: true, MSG: 'Student Login Data Found', data: data });
        } else {
            res.send({ success: false, MSG: 'Student Login Data Not Found', data: data })
        }
    });
});

router.get('/getTotalStudents', (req, res) => {
    // console.log(req.query)
    let parameter = {
        classRange: req.query.classRange
    }
    StudentController.getTotalStudentRecords(parameter).then((data) => {
        if (data) {
            res.send({ success: true, MSG: 'Student Login Data Found', data: data });
        } else {
            res.send({ success: false, MSG: 'Student Login Data Not Found', data: data })
        }
    });
});

router.post('/updateStudentRecord', (req, res) => {

    let id = req.body._id;
    let studentName = req.body.studentName;
    let rank = req.body.rank;
    let studentClass = req.body.studentClass;
    let userId = req.body.userId;
    let questionRecord = req.body.questionRecord;
    if (studentName && studentClass) {
        let parameter = {
            _id: id,
            studentName: studentName,
            rank: rank,
            studentClass: studentClass,
            userId: userId,
            questionRecord: questionRecord
        }

        StudentController.updateStudentRecord(req.body).then((data) => {
            if (data) {
                res.send({ success: true, MSG: 'Student Record Saved Successfully', data: data });
            } else {
                res.send({ success: false, MSG: 'Student Record Not Saved', error: data });
            }
        });
    } else {
        res.send({ success: false, MSG: 'Something Went Wrong' });
    }
});

router.get('/getStudentDetails', (req, res) => {
    let _id = req.query.id;
    StudentController.getStudentDetails(_id).then((data) => {
        if (data) {
            res.send({ success: true, MSG: 'Student Login Data Found', data: data });
        } else {
            res.send({ success: false, MSG: 'Student Login Data Not Found', data: data })
        }
    });
});

router.get('/getClassWiseForm', (req, res) => {

    var studentClass = req.query.studClass;
    studentClass = parseInt(studentClass);

    StudentController.getClassWiseForm(studentClass).then((data) => {
        if (data) {
            res.send({ success: true, MSG: 'Student Form Data Found', data: data });
        } else {

            res.send({ success: false, MSG: 'Student Form Data Not Found', data: data })
        }
    });
});



module.exports = router;