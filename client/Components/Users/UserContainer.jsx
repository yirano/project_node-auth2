import React, { useState, useEffect } from "react"
import { axiosWithAuth } from "../../Utils/axiosWithAuth"
import UserCard from "./UserCard"
import { Dashboard } from "../../Utils/styled"
import { connect } from "react-redux"
import { getData } from '../../Utils/Actions/actions'

const UserContainer = (props) => {

  useEffect(() => {
    props.getData()
  }, [])

  return (
    <div>
      <h4>Hello Dean,</h4>
      <Dashboard>
        {props.data.map((d) => (
          <UserCard data={d} />
        ))}
      </Dashboard>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, { getData })(UserContainer)