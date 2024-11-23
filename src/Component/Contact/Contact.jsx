import React from 'react'

export default function Contact() {
  return<>
  <div className="container mt-3">
    <div className="row">
      <div className="col-md-3 shadow-sm p-3">
      <div className='d-flex align-items-center'>
      <i className="phoneLogo fa-solid fa-phone"></i>
      <p className='ms-4 mt-2 fs-5'>call us</p>
      </div>
      <p>We are available 24/7,7 days a week</p>
      <p>phone: +880161112222</p>
      <hr />
      <div className='d-flex align-items-center'>
      <i className="phoneLogo fa-solid fa-envelope"></i>
      <p className='ms-4 mt-2 fs-5'>Write to us</p>
      </div>
      <p>Fill out our form and we will concat you within 24 hours</p>
      <p>Emails:customer@exclusive.com</p>
      <p>Emails:support@exclusive.com</p>
      </div>
      <div className="col-md-7 shadow " >
        <div className="row justify-content-between  p-2" >
        <input type="text" className='inputContact w-25 ' placeholder='Your Name' />
          <input type="email" className='inputContact w-25' placeholder='Your Email'/>
          <input type="text" className='inputContact w-25' placeholder='Your Phone'/>
        </div>
        <div className="row">
          <textarea className='textAreaContact' name="" id="" placeholder='Your Message'></textarea>
          <button className='btn btnContact btn-danger  mt-2'>Send Message</button>
        </div>
      </div>
      
    </div>
  </div>
  
  </>
}
