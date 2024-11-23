import React from 'react'
import signImg from "../../assets/Side Image.png";
import { Link } from 'react-router-dom';
import googleImg from'../../assets/google_logo-google_icongoogle-512.webp'
export default function Register() {
  return<>
  <div className="container p-4">
    <div className="row align-items-center">
      <div className="col-md-6">
        <img src={signImg} className='w-100' alt="" />
      </div>
      <div className="col-md-4 ms-5 py-5 d-flex flex-column justify-content-center">

            <h2 className='text-center'>Create an account</h2>
            <span className='ms-5'>Enter your details below</span>
           <form className='mt-4 '>
           <input
                name="name"
                id="name"
                type="name"
                placeholder="Name"
                className="inputEmailLogin"
              />

<input
                name="email"
                id="email"
                type="email"
                placeholder="Email or Phone Number"
                className="inputEmailLogin mt-3 mb-3"
              />
               <input
                name="password"
                id="password"
                type="name"
                placeholder="Password"
                className="inputEmailLogin"
              />
              <div className='d-flex flex-column '>
<button className='registerBtn btn btn-danger w-75 mt-4 ' type='submit'>Create Account</button>
<button className='w-75 mt-2   googleBtn'><img src={googleImg}/> Sign up with Google</button>
<p className='text-body-secondary ms-4 mt-5'>Already have account?   <Link className='text-danger' to={'/login'}> Login</Link> </p>
              </div>
           </form>
          </div>
    </div>
  </div>
  
  </>
}
