const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookings.controller.js');

// Get all bookings
router.get('/', bookingsController.getBookings);

// Get a single booking by ID
router.get('/:id', bookingsController.getBookingById);

// Create a new booking
router.post('/', bookingsController.createBooking);

// Update a booking by ID
router.put('/:id', bookingsController.updateBooking);

// Delete a booking by ID
router.delete('/:id', bookingsController.deleteBooking);

module.exports = router;
