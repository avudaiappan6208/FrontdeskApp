const express = require('express');
const appointmentcontroller = require('../Controller/AppointmentController');
const appointmentrouter = express.Router();

// Create a new appointment
appointmentrouter.post('/appointments', appointmentcontroller.createappointment);
appointmentrouter.get('/appointments', appointmentcontroller.getallappointments);



module.exports = appointmentrouter;