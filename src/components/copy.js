import React from 'react';
import { Button } from 'react-bootstrap';
function CopyPage() {

  return (
    <div className='text-center m-4'  style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <p className='text-center  fw-bold '>
            Designed & Developed by
            <p style={{
                color: '#008899',
                textAlign: 'center',
                fontWeight: 'bold',
                textDecoration: 'underline',
                fontSize: '24px',
            }}>OlewinTechSolutions</p>
            <p style={{
                color: '#008899',
                textAlign: 'center',
                fontWeight: 'bold',
                textDecoration: 'underline',
            }}>Bangalore - India</p>
           
        </p>
    ©2022- 2024 Copyright: <span>Visit:-</span>
    <a className='text-reset fw-bold' href='https://olewintechsolutions.com/'>
      OlewintechSolutions.com
    </a>
   <div>
   <Button  className="btn btn-light fs-5 fw-bold" href='/policy' >Privacy Policy </Button>
   <Button  className="btn btn-light fs-5 fw-bold" href='/terms' >Terms & Conditions</Button>
 
   </div>
  </div>
  )
}
export default CopyPage;



