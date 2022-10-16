const greetingsController = require('./controllers/baseController');
const fetchStudentDataFromGoogleSheetController
 = require('./controllers/fetchStudentDataFromGoogleSheetController');

const router = require('express').Router();

router.get('/', greetingsController);
router.get('/student-data', fetchStudentDataFromGoogleSheetController)

module.exports = router;