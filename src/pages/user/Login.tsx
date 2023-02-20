import React from 'react'
import { Login } from '../../components/Common'
import userLogin from '../../assets/image/userLogin.svg'

function UserLogin() {
  return (
      <Login type={'user'} image={userLogin} color={"#38d39f"} />
  )
}

export default UserLogin
