const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const getAssignmentRouter = require('./routes/Student/getAssignment')
const addAssignmentRouter = require('./routes/Teacher/assignment')
const peerAssignmentRouter = require('./routes/Teacher/peerAssignment')
const assignReviewersRouter = require('./routes/Teacher/assignReviewers')

const activitiesRouter = require('./routes/Teacher/activities')

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

app.use('/api/activities', activitiesRouter) // get list of all assigned assignments(activities) on given course_work_id

app.listen(process.env.port, () => {
  console.log(`app listening on port ${process.env.port}`)
})