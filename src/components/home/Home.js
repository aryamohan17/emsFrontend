import React from 'react'
import './Home.css'
import {Button,Form} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Hometable from '../hometable/Hometable'

function Home() {
  const navigate = useNavigate()
  const navReg  = ()=>{
    navigate('/register')
  }
  return (
    <div>
    {/* search and add */}
      <div className='d-flex mt-5 ms-3 justify-content-between'>
        <div className='d-flex '>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button type="submit">Submit</Button>
        </div>
        <div className='me-3'>
          <Button onClick={navReg} variant="primary">+  Add</Button>{' '}
        </div>
        
      </div>
      <div className='hometable mt-5'>
            <Hometable/>
        </div>
      {/* emp table data */}
    </div>
  )
}

export default Home