import React, { useState } from 'react'
import './Regiter.css'
import { Link, useNavigate } from 'react-router-dom'
import { registerForm } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '', age: '', email: "", phoneno: ""
  })

  const signupForm = async () => {
    if (data.name && data.age && data.email && data.phoneno) {
      console.log(data);
      const response = await registerForm(data)
      setData("")
      navigate('/home')

    }
    else {
      toast.warning("Please Type data")
    }
  }

  const namecheck = (e) => {
    const { value } = e.target
    if (!!value.match(/^[A-Za-z" "]+$/)) {
      setData({ ...data, name: e.target.value })

    } else {
      toast.warning('Enter Valid Data')
    }

  }
  const emailCheck = (e) => {
    const { value } = e.target
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/;

    if (!!re.test(value) && value.endsWith("@gmail.com")){
      setData({ ...data, email: e.target.value })
    } else {
      toast.warning('Enter Valid Email')
    }

  }
  const numberCheck = (e) => {
    const { value } = e.target
    if (!!value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
      setData({ ...data, phoneno: e.target.value })
    } else {
      toast.warning('Enter Valid Phone number')
    }

  }
 


  return (
    <>
      <Navbar className="position-fixed p-3 navbar12">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>POSTY</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {/* <Link to={'/login'} className='buttons1'>LOGIN</Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='signuppage'>
        <h1 className='text-center mt-5 text-light'>REGISTER</h1><br />

        <div className='d-flex justify-content-center align-items-center'>
          <form className='formfields' action="">

            <input onChange={(e) => namecheck(e)} placeholder='Name' className='inputbox' type="text" required /><br />
            <input onChange={(e) => setData({ ...data, age: e.target.value })} placeholder='Age' className='inputbox' type="number" required /><br />
            <input onChange={(e) => emailCheck(e)} placeholder='Email' className='inputbox' type="email" required /><br />
            <input onChange={(e) => numberCheck(e)} placeholder='Phone' className='inputbox' type="text" required /><br />
            {/* <input onChange={(e)=>setData({...data,password:e.target.value})} placeholder='Password' className='inputbox' type="password" /><br /> */}
            <button onClick={() => signupForm()} className='signup' ><Link className='linksighnup'>REGISTER</Link></button>
          </form>


        </div>
        {/* <p className='loginwe'>Already Have An Account ?<Link to={'/login'} className='link' href="">Login</Link></p> */}

      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}
export default Register