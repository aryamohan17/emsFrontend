import React from 'react'
import { Row, Card, Table, Dropdown } from 'react-bootstrap'
import image from '../image/userImg.png'
import { Link } from 'react-router-dom'

function Hometable() {
  return (
    <div>
      <div className="container">
        <Row>
          <div className='col'>
            <Card className='shadow'>
              <Table responsive="sm" className='align-items-center'>
                <thead className='thead-dark'>
                  <tr className='table-primary'>
                    <th>Id</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>max tylor</td>
                    <td>max@gmail.com</td>
                    <td>M</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          Active
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Active
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <img src={image} alt="" width={'50px'} height={'50px'} />
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                          <i class="fa-solid fa-list-ul"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link to={'/profile/1'}  style={{textDecoration:'none'}}>
                            <i class="fa-solid fa-eye"></i>
                            <span className='ms-1'>view</span>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link to={'/edit/1'} style={{ textDecoration: 'none' }}>
                              <i class="fa-solid fa-pen-to-square"></i>
                              <span className='ms-1'>edit</span>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i class="fa-solid fa-trash-can"></i>
                            <span>delete</span>        
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default Hometable