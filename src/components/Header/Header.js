import React from 'react'
import {Navbar,Container} from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar className="bg-body-primary" style = {{backgroundColor:'blue'}}>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <span style={{color:'white'}}>Employee portal</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}


export default Header