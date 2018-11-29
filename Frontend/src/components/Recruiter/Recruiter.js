import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getPostedApplications } from '../../actions/recruiterActions'

class Recruiter extends React.Component {
  constructor(props) {
    super(props)
    this.props.getPostedApplications()
    this.state = {
      posted_applications: []
    }
  }
  componentWillMount() {
    if (this.props.posted_applications.length > 0) {
      this.setState({
        posted_applications: this.props.posted_applications
      })
    }
  }
  render() {
    const posted_applications = this.props.posted_applications.map(app => {
      return (
        <div>
          <p>Applicant Name: { app.firstname + " " + app.lastname }</p>
          <p>City: { app.city }</p>
          <p>Disability Questions: { app.disabilityQuestion }</p>
          <hr />
        </div>
      )
    })
    return (
      <div>
        <Link to='/recruiter/post-a-job'>Post a job</Link>
        <h3>Posted applications</h3>
        { posted_applications }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posted_applications: state.recruiterReducer.posted_applications
})

export default connect(
  mapStateToProps,
  { getPostedApplications }
)(Recruiter)
