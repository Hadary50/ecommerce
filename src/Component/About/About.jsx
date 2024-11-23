import React from "react";
import aboyImg from "../../assets/two-beautiful-trendy-young-african-ladies-posing-and-showing-off-their-shopping-bags-2BN90KA.jpg";
import Footer from "../Footer/Footer";
export default function About() {
  return (
    <>
      <div className="container mt-4 ">
        <div className="row justify-content-center align-content-center">
          <div className="col-md-5 mx-4 py-4 mt-5">
            <h2  className="h1">Our Story</h2>
            <p className="mt-4 text-black fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              dolores ratione architecto. Reprehenderit blanditiis sapiente
              perferendis dicta alias aliquid deleniti incidunt, quibusdam quam
              animi doloremque! Numquam officiis reprehenderit nihil nisi enim
           
            </p>
          </div>
          <div className="col-md-6">
            <img src={aboyImg} className="w-100" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
          <div className="card mt-5" >
  <div className=" card-body aboutCard text-center">
    <i class="p-3 abouCardIcon fa-solid fa-igloo fs-1 "></i>
    <h2 className="fw-bolder">10.5k</h2>
    <h6>Saller active our site</h6>
  </div>
</div>
          </div>
          <div className="col-md-3">
          <div className="card mt-5" >
  <div className=" card-body aboutCard text-center">
    <i className="p-3 abouCardIcon fa-solid fa-dollar fs-1 "></i>
    <h2 className="fw-bolder">33k</h2>
    <h6>Mopnthy products sale</h6>
  </div>
</div>
          </div>
          <div className="col-md-3">
          <div className="card mt-5" >
  <div className=" card-body aboutCard text-center">
    <i class="p-3 abouCardIcon fa-solid fa-shop fs-1 "></i>
    <h2 className="fw-bolder">45.5k</h2>
    <h6>Customer active in our site</h6>
  </div>
</div>
          </div>
          <div className="col-md-3">
          <div className="card mt-5" >
  <div className=" card-body aboutCard text-center">
    <i class="p-3 abouCardIcon fa-solid fa-keyboard fs-1 "></i>
    <h2 className="fw-bolder">25k</h2>
    <h6>Anual gross sale in our site</h6>
  </div>
</div>
          </div>
          
        </div>
        
      </div>
    </>
  );
}
