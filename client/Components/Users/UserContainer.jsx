import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../../Utils/axiosWithAuth'

const UserContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axiosWithAuth().get('http://localhost:4000/users/')
      .then(res => {
        console.log(res)
        setData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <h1>This is private</h1>
      {data.map(d => {
        return (
          <>
            <h4>{d.username}</h4>
          </>
        )
      })}
    </div>
  )
}

export default UserContainer
