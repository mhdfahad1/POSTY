import React from 'react'
import { Link } from 'react-router-dom'
import './Regiter.css'


function Login() {
  return (
    <>
     <div className='signuppage'>
    <h1 className='text-center mt-5 text-light'>LOGIN</h1><br />

        <div className='d-flex justify-content-center align-items-center'>
            <form className='formfields' action="">
            {/* <TextField className='inputbox P-light' id="outlined-basic" label="Name" variant="outlined" /><br />
            <TextField className='inputbox' id="outlined-basic" label="Age" variant="outlined" /><br />
            <TextField className='inputbox' id="outlined-basic" label="Email" variant="outlined" /><br />
            <TextField className='inputbox' id="outlined-basic" label="Phone No" variant="outlined" /><br />
            <TextField className='inputbox' id="outlined-basic" label="Password" variant="outlined" /><br /> */}
            <input placeholder='User Name' className='inputbox' type="text" /><br />
            <input placeholder='Password' className='inputbox' type="text" /><br />
            <button className='signup'><Link className='linksighnup' to={'/home'}>Login</Link></button>
            </form>


        </div>
        <p className='loginwe'>Don't Have An Account? <Link className='link' to={'/signup'} href="">Sign up</Link></p>

    </div>
        
    </>
  )
}

export default Login