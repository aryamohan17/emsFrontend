import React from 'react'
import './Register.css'
import { Card, Row, Form,Button } from 'react-bootstrap'
import image from '../image/userImg.png'
import Select from 'react-select'

function Register() {
  const options = [
    {value:'Active' , label :'Active'},
    {value:'InActive', label:'InActive'}
  ]
  return (
    <>
      <div className="container mt-5">
        <h2 className='text-center mt-3'> Register Employee Details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className="ms-2 mb-3">
          <div className='text-center'>
            <img src={image} width={'50px'} height={'50px'} className='rounded-circle ' alt="" />
          </div>
            <form action="">
              <Row>
                <Form.Group className="mb-3 col-lg-6" controlId="exampleForm.ControlInput1">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" placeholder="first name" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="exampleForm.ControlInput2">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" placeholder="last name" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="exampleForm.ControlInput3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="email" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="exampleForm.ControlInput4">
                  <Form.Label>Mobile number</Form.Label>
                  <Form.Control type="text" placeholder="mobilenumber" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="exampleForm.ControlInput5">
                  <Form.Label>Select gender</Form.Label>
                  <div>
                  <Form.Check
                    type={"radio"}
                    label={'male'}
                    name='gender'
                    value={'Male'}
                  />
                  <Form.Check
                    type={"radio"}
                    label={'Female'}
                    name='gender'
                    value={'Female'}
                  />
                  </div>
                  
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="exampleForm.ControlInput6">
                  <Form.Label>Select employee status</Form.Label>
                  <Select options={options}></Select>
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="exampleForm.ControlInput6">
                  <Form.Label>Choose profilepic</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="exampleForm.ControlInput6">
                  <Form.Label>Employee location</Form.Label>
                  <Form.Control type="text" placeholder='employee location' />
                </Form.Group>
                <Button variant="primary" size='sm'className="custom-button" active>
                  Submit
                </Button>
              </Row>
            </form>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Register