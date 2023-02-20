import React from 'react'
import { Login } from '../../components/Common'
import companyLogin from '../../assets/image/companyLogin.webp'

function CompanyLogin() {
    return (
        <Login type={'company'} image={companyLogin} color={"#082955"} />
    )
}

export default CompanyLogin
