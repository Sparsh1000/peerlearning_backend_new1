const peerAssignmentRouter = require('express').Router()

const { peerAssignment } = require('../../controllers/Teacher/peerAssignment')
peerAssignmentRouter.get('/assignment', peerAssignment)

module.exports = peerAssignmentRouter

//get detailed information on that peer assignment 
