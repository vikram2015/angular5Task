var express = require('express');
var router = express.Router();
var NewFormController = require('../controller/newFormController');


router.post('/saveFormData', (req, res) => {

    let newClassRange = req.body.classNewOption.classRange;
    let questionRecord = req.body.newQuestions;

    let parameter = {
        classRange: newClassRange,
        forms: questionRecord
    }


    NewFormController.saveNewFormData(parameter).then((data) => {
        if (data) {
            res.send({ success: true, MSG: 'Form Saved Successfully', data: data });
        } else {
            res.send({ success: false, MSG: 'Error In Form Saving', data: data });
        }
    })
});


router.get('/getTotalForms', (req, res) => {

    let parameter = {
        classRange: req.query.classRange
    }
    NewFormController.getClassRangeForm(parameter).then(function (data) {
        if (data) {
            res.send({ success: true, MSG: 'Form Saved Successfully', data: data });
        } else {
            res.send({ success: false, MSG: 'Error In Form Saving', data: data });
        }
    })
})


module.exports = router;

