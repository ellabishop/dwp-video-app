const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/full-name-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var fullName = req.session.data['fullName']

// Check whether the variable matches a condition
  if (fullName == "Noel Name"){
  res.redirect('/citizen/join-name-confirm-fail')
  }
  else if (fullName == ""){
    // Send user to next page
    res.redirect('/citizen/join-name-error')
  }
  else {
    // Send user to ineligible page
    res.redirect('/citizen/join-name-confirm')
  }
})


router.post('/security-code-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var securityCode = req.session.data['security-code']


// Check whether the variable matches a condition
  if (securityCode == "apple"){
    // Send user to next page
    res.redirect('/citizen/passcode/join-password-confirm')
  }
  else if (securityCode == ""){
    // Send user to ineligible page
    res.redirect('/citizen/passcode/join-password-error')
  }
  else {
    // Send user to ineligible page
    res.redirect('/citizen/passcode/join-password-confirm-fail')
  }

})

router.post('/appt-time', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var claimantName = req.session.data['fullName']
  var apptDay = req.session.data['appointment-day']
  var apptMon = req.session.data['appointment-month']
  var apptYear = req.session.data['appointment-year']
  var startTime = req.session.data['startTime']
  var duration = req.session.data['myDuration']

// Check whether the variable matches a condition
if (claimantName, apptDay, apptMon, apptYear, startTime, duration  == ""){
    // Send user to next page
    res.redirect('/staff/create-appointment/confirm-video-details')
  }
  else {
    // Send user to ineligible page
    res.redirect('/staff/create-appointment/confirm-video-details')
  }
})


router.post('/appt-time-2', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var claimantName = req.session.data['fullName']
  var apptDay = req.session.data['appointment-day']
  var apptMon = req.session.data['appointment-month']
  var apptYear = req.session.data['appointment-year']
  var startTime = req.session.data['startTime']
  var duration = req.session.data['myDuration']

// Check whether the variable matches a condition
if (claimantName, apptDay, apptMon, apptYear, startTime, duration  == ""){
    // Send user to next page
    res.redirect('/staff/create-appointment/version_1/confirm-video-details')
  }
  else {
    // Send user to ineligible page
    res.redirect('/staff/create-appointment/version_1/confirm-video-details')
  }
})

router.post('/appt-time-3', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var claimantName = req.session.data['fullName']
  var apptDay = req.session.data['appointment-day']
  var apptMon = req.session.data['appointment-month']
  var apptYear = req.session.data['appointment-year']
  var startTime = req.session.data['startTime']
  var duration = req.session.data['myDuration']

// Check whether the variable matches a condition
if (claimantName, apptDay, apptMon, apptYear, startTime, duration  == ""){
    // Send user to next page
    res.redirect('/staff/create-appointment/welsh-create-appointment/version_1/enter-video-details-error-nothing')
  }
  else {
    // Send user to ineligible page
    res.redirect('/staff/create-appointment/welsh-create-appointment/version_1/confirm-video-details')
  }
})

//**Blank appointment code **//

// Add your routes here - above the module.exports line
router.post('/appointment-code-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var appointmentCode = req.session.data['appointmentCode']

// Check whether the variable matches a condition
  if (appointmentCode == ""){
    // Send user to next page
    res.redirect('staff/join-appointment/version_2/code-error')
  }
  else {
    res.redirect('staff/join-appointment/version_2/start-staff-permissions')
  }

})

router.post('/appointment-code-answer-2', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var appointmentCode = req.session.data['appointmentCode']

// Check whether the variable matches a condition
  if (appointmentCode == ""){
    // Send user to next page
    res.redirect('staff/join-appointment/welsh-conduct-appointment/code-error')
  }
  else {
    res.redirect('staff/join-appointment/welsh-conduct-appointment/start-staff-permissions')
  }

})

router.post('/appointment-code-3', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var appointmentCode = req.session.data['appointmentCode']

// Check whether the variable matches a condition
  if (appointmentCode == ""){
    // Send user to next page
    res.redirect('staff/join-appointment/version_3/code-error')
  }
  else {
    res.redirect('staff/join-appointment/version_3/start-staff-permissions')
  }

})

//**Blank quality radio **//

// Add your routes here - above the module.exports line
router.post('/quality-answer', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var quality = req.session.data['quality']

// Check whether the variable matches a condition
  if (quality == "good"){
    // Send user to next page
    res.redirect('citizen/version_2/thankyou')
  }
  // Check whether the variable matches a condition
    if (quality == "bad"){
      // Send user to next page
      res.redirect('citizen/version_2/thankyou')
    }
  else {
    res.redirect('citizen/version_2/end-complete-error')
  }

})

//**Blank quality radio **//

// Add your routes here - above the module.exports line
router.post('/quality-answer-welsh', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var quality = req.session.data['quality']

// Check whether the variable matches a condition
  if (quality == "good"){
    // Send user to next page
    res.redirect('citizen/version_2/welsh/thankyou')
  }
  // Check whether the variable matches a condition
    if (quality == "bad"){
      // Send user to next page
      res.redirect('citizen/version_2/welsh/thankyou')
    }
  else {
    res.redirect('citizen/version_2/welsh/end-complete-error')
  }

})

router.post('/appointment-code-answer-2', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var appointmentCode = req.session.data['appointmentCode']

// Check whether the variable matches a condition
  if (appointmentCode == ""){
    // Send user to next page
    res.redirect('staff/join-appointment/welsh-conduct-appointment/code-error')
  }
  else {
    res.redirect('staff/join-appointment/welsh-conduct-appointment/start-staff-permissions')
  }

})

//welsh Translations

router.get('/translate', function (req, res) {

// Make a variable and give it the value from 'how-many-balls'
  var currentURL = req.path

  if (currentURL=='help'){
    // Send user to next page
    res.redirect('welsh/help')
  }

})

router.get('/english-help', function (req, res) {

res.render('citizen/version_2/help')
})


module.exports = router

module.exports = router
