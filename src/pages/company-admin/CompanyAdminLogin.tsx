import React from 'react'
import { Login } from '../../components/Common'
import companyAdminLogin from '../../assets/image/companyAdminLogin.webp'



function CompanyAdminLogin() {
    return (
        <Login type={'companyAdmin'} image={companyAdminLogin} color={"#dc8a64"} />
    )
}

export default CompanyAdminLogin
