const Appointment = require('../Models/Appointment');
const Sendemail = require('../utils/Sendemail');
const appointmentcontroller = {

    createappointment: async (req, res) => {
        try {
            const { customerid, date, time } = req.body;
            const appointment = new Appointment({
                customer: customerid,
                date,
                time
            });
            await appointment.save();

           await Sendemail({
            to: 'harinzz6803@gmail.com',
            subject:'Appointment Confirmation',
            text: `Your appointment is confirmed on ${date} at ${time}`
           });

            res.status(201).json(appointment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    getallappointments: async (req, res) => {
        try {
            const appointments = await Appointment.find().select('-__v');
            res.status(200).json(appointments);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = appointmentcontroller;