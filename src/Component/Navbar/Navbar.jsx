import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder me-5" to={"/"}>Exclusive</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5" >
        <li className="nav-item">
          <Link className="nav-link active text-dark fw-semibold" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-dark fw-semibold" aria-current="page" to={'/contact'}>Contact</Link>
        </li>  
        <li className="nav-item">
          <Link className="nav-link active text-dark fw-semibold" aria-current="page" to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-dark fw-semibold" aria-current="page" to={'/Login'}>sign up</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="searchInput" type="search" placeholder="What are you looking for ?" aria-label="Search"/>
        
      </form>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5" >
        <li className="nav-item ms-5">
          <Link className="nav-link active text-dark" aria-current="page" to={'/wishList'}><i className="fs-4 fa-regular fa-heart"></i></Link>
        </li>
        <li className="nav-item ms-4">
          <Link className="nav-link active text-dark" aria-current="page" to={'/cart'}><i className="fs-4 fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
  </>
}