import React, { useContext, useState } from "react";
import signImg from "../../assets/Side Image.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { UserContext } from "../../Context/CartContext/UserContext/UserContext";
import { ToastContainer } from "react-toastify";
export default function Login() {
  let [error, setError] = useState(null);
  // let [userToken,setUserToken]=useState(null)
  let {userToken,setUserToken}=useContext(UserContext)
  let Navigate = useNavigate();
  let validionSceme = yup.object({
    username: yup.string().required("Email is requird"),
    password: yup.string().required("password is requird"),
  });
  async function LoginSubmit(values) {
    let response = await axios
      .post(`https://dummyjson.com/auth/login`, values)
      .catch((err)=>{
        setError(err.response.data.message);
      })
      if(response.statusText=='OK'){
        localStorage.setItem('userToken',response?.data.accessToken)
        // setUserToken(response?.data.accessToken)
        setUserToken(response?.data.accessToken)
        Navigate('/')
        
      }
      console.log(response);
      
  }
  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validionSceme,
    onSubmit: LoginSubmit,
  });
  return (
    <>
      <div className="container p-4 ">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={signImg} className="w-100 " alt="" />
          </div>
          <div className="col-md-4 ms-3 d-flex flex-column">
    {error?<div className="alertError"> <i className="ta3gob fw-bolder fa-solid fa-exclamation"></i> {error}</div>:''}

            <h2>Login in to Exclusive</h2>
            <span>Enter your details below</span>
            <form onSubmit={formik.handleSubmit}>
              <span className="d-block fw-bold">name is : emilys</span>
              <span  className="d-block fw-bold"> password is : emilyspass</span>
              <input
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="email"
                type="name"
                placeholder="Email or Phone Number"
                className="inputEmailLogin"
              />
              <input
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                placeholder="Password"
                className="inputPasswordLogin mt-3"
              />
              <div className="d-flex justify-content-between ">
                <button type="submit" className="btn btn-danger mt-2 w-25">
                  Login
                </button>
                <Link className="mt-3 text-danger" to={"/Register"}>
                  Not have Email..?
                </Link>
          
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
