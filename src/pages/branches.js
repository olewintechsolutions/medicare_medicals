import React from 'react'
import logo from '../images/medicallogo.jpg'
function Branches() {
  return (
  <>
  <div className='container'>
    <img src={logo} alt=""
    style={{
      width:"80%",
      height:"50vh",
      margin:"auto",
      display:"flex",
    }}/>
  <h2 className="text-center fw-bold">Our Stores</h2>
      <p className="text-center fw-bold">Madanapalle- Andhra Pradesh</p>

  </div>
  <div className='container-md'>
    <div className="row">
      <div className='col-6 text-center'>
        <h2>Branch-1</h2>
                <div>
                  <h3 class =" fw-bold text-success ">Address</h3>
                  <ul className='list-unstyled'>
                    <li class = "fw-bold">Medicare Medicals </li>
                    <li class="  text-primary" >+91 94920 77949 </li>
                    <li class =" text-primary">+08571- 295559 </li>
                    <li class =" text-primary"> medicaremedicals@gmail.com </li>
                    <li>Near Mallikarjun Circle <br/> Opposite to BSNL Office </li>
                  </ul>
                </div>
      </div>
      <div className='col-6 text-center'>
        <h2>Branch-2</h2>
        <div>
                  <h3 class =" fw-bold text-success ">Address</h3>
                  <ul className='list-unstyled'>
                    <li class = "fw-bold">Medicare Medicals </li>
                    <li class="  text-primary" >+91 94920 77949 </li>
                    <li class =" text-primary">+08571 352739 </li>
                    <li class =" text-primary"> medicaremedicals@gmail.com </li>
                    <li>NeeruguttuvariPalli <br/> Opposite Tomato Market  </li>
                  </ul>
                </div>
      </div>
    </div>
    
  </div>


  </>
  )
}

export default Branches;