import React from 'react'

function UserCard({userData}) {
  return (
    <>
        <p>{userData.id}</p>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
    </>
  )
}

export default UserCard