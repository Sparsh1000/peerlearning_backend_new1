const { getIssues } = require('../../controllers/Teacher/getIssues')

const getIssuesRouter = require('express').Router()

getIssuesRouter.get('/', getIssues)

module.exports = getIssuesRouter
//get all issues on given peer_assignment_id
