var express = require('express');
var router = express.Router();
var LoginController = require('../controller/loginController');

router.post('/saveAdminLogin', (req, res) => {

    let userId = req.body.userId;
    let password = req.body.password;
    let isAdmin = req.body.isAdmin;

    if (userId && password && isAdmin) {
        let parameter = {
            userId: userId,
            password: password,
            isAdmin: isAdmin
        }
        LoginController.saveAdminLogin(parameter).then((data) => {
            if (data) {
                res.send({ success: true, MSG: 'Admin Login Saved Successfully', data: data });
            } else {
                res.send({ success: false, MSG: 'Admin Login Not Saved', error: data });
            }
        });
    } else {
        res.send({ success: false, MSG: 'Something Went Wrong' });
    }
});


router.post('/checkAdminLogin', function (req, res) {

    let userId = req.body.userName;
    let password = req.body.password;
    var isAdmin;
    var isStudent;
    let adminParameter = {};
    let studentParameter = {};
    if (req.body.selectedOption) {
        if (req.body.selectedOption == 'isAdmin') {
            isAdmin = true;
        } else {
            if (req.body.selectedOption == 'isStudent') {
                isStudent = true;
            } else {
                req.body.selectedOption = undefined;
            }
        }
    } else {
        req.body.selectedOption = undefined;
    }
    if (userId && password) {
        if (isAdmin == true) {
            adminParameter = {
                userId: userId,
                password: password,
                isAdmin: true
            }
            LoginController.checkAdminLogin(adminParameter).then((data) => {
                if (data) {
                    res.send({ success: true, MSG: 'Student Login Saved Successfully', data: data });
                } else {
                    res.send({ success: false, MSG: 'Student Login Not Saved', error: data });
                }
            });
        } else {
            if (isStudent == true) {
                studentParameter = {
                    userId: userId,
                    password: password,
                    isStudent: true
                }
                LoginController.checkStudentLogin(studentParameter).then((data) => {
                    if (data) {
                        res.send({ success: true, MSG: 'Student Login Saved Successfully', data: data });
                    } else {
                        res.send({ success: false, MSG: 'Student Login Not Saved', error: data });
                    }
                });
            }
        }
    } else {
        res.send({ success: false, MSG: 'Something Went Wrong' });
    }
});


router.post('/saveStudentLogin', (req, res) => {

    let userId = req.body.userId;
    let password = req.body.password;
    let isStudent = req.body.isStudent;

    if (userId && password && isStudent) {
        let parameter = {
            userId: userId,
            password: password,
            isStudent: isStudent
        }
        LoginController.saveStudentLogin(parameter).then((data) => {
            if (data) {
                res.send({ success: true, MSG: 'Student Login Saved Successfully', data: data });
            } else {
                res.send({ success: false, MSG: 'Student Login Not Saved', error: data });
            }
        });
    } else {
        res.send({ success: false, MSG: 'Something Went Wrong' });
    }
});


router.get('/getAdminLogin', (req, res) => {
    LoginController.getAdminLogin().then((data) => {
        if (data) {
            res.send({ success: true, MSG: 'Admin Login Data Found', data: data });
        } else {
            res.send({ success: false, MSG: 'Admin Login Data Not Found', data: data })
        }
    });
});


router.get('/getStudentLogin', (req, res) => {
    LoginController.getStudentLogin().then((data) => {
        if (data) {
            res.send({ success: true, MSG: 'Student Login Data Found', data: data });
        } else {
            res.send({ success: false, MSG: 'Student Login Data Not Found', data: data })
        }
    });
});


module.exports = router;