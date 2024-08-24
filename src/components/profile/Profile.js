import React from 'react'
import './Profile.css'
import {Card,Row} from 'react-bootstrap'
import image from '../image/userImg.png'

function Profile() {
  return (
    <div>
      <div className='container'>
        <Card className='shadow col-lg-6 mx-auto mt-5'>
            <Card.Body>
                <Row>
                  <div className="col">
                    <div className="profile_img d-flex justify-content-center">
                        <img src={image} alt="" />
                    </div>
                  </div>
                </Row>
                <div className='text-center'>
                  <h3>Max well</h3>
                  <h4><i class="fa-regular fa-envelope"></i> :- max@gmail.com</h4>
                  <h4><i class="fa-solid fa-phone"></i> :- 9876543210</h4>
                  <h4><i class="fa-solid fa-venus-double"></i> :- male</h4>
                  <h4><i class="fa-solid fa-location-dot"></i> :- Ekm</h4>
                  <h4>Status :- Active </h4>

                </div>
            </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Profile