import React from 'react';
import getJWTUsername from '../common/auth'
import uuid from 'uuidv4'

export default class PostAJob extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      adminId: getJWTUsername(),
      jobId: uuid(),
      title: '',
      jobDescription: '',
      industry: '',
      employmentType: '',
      location: '',
      jobFunction: '',
      numberOfApplications: 0
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        test
      </div>
    )
  }
}
