const { reviewAssignment } = require('../../controllers/Students/reviewAssignment')

const reviewAssignmentRouter = require('express').Router()

reviewAssignmentRouter.post('/', reviewAssignment)

module.exports = reviewAssignmentRouter

// add review of the reviewer on the given peer_activity_id