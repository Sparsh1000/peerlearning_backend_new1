const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const getAssignmentRouter = require('./routes/Student/getAssignment')
const addAssignmentRouter = require('./routes/Teacher/assignment')
const peerAssignmentRouter = require('./routes/Teacher/peerAssignment')
const assignReviewersRouter = require('./routes/Teacher/assignReviewers')
const reviewerAssignmentsRouter = require('./routes/Student/reviewerAssignments')
const activitiesRouter = require('./routes/Teacher/activities')
const reviewAssignmentRouter = require('./routes/Student/reviewAssignment')
const getIssuesRouter = require('./routes/Teacher/getIssues')
const addIssueRouter = require('./routes/Student/addIssue')

connectToMongo();

const app = express()
app.use(cors())       //giving the access of fetching the request from an api.
app.use(bodyParser.raw())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Are you sure you are on the right page? This is Backend!')
})
app.use(express.json());
app.use('/api/assignment', getAssignmentRouter) //get all peer assignments on given course_id
app.use('/api/assignment', addAssignmentRouter) //add peer learning on an assignment
app.use('/api/peer', peerAssignmentRouter) //get detailed information on that peer assignment
app.use('/api/assignreviewers', assignReviewersRouter) // start peer learning on an assignment
app.use('/api/reviewerassignments', reviewerAssignmentsRouter) // get all peer activities assigned to a reviewer for given course_work_id
app.use('/api/reviewassignment', reviewAssignmentRouter) // add review of the reviewer on the given peer_activity_id
app.use('/api/activities', activitiesRouter) // get list of all assigned assignments(activities) on given course_work_id
app.use('/api/issues', getIssuesRouter) // get all issues on given peer_assignment_id
app.use('/api/issue', addIssueRouter) // add new issue to the respective peer_activity_id


app.listen(process.env.port, () => {
  console.log(`app listening on port ${process.env.port}`)
})