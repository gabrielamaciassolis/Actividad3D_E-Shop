import React from 'react'
import { Container, Row, Col, Navbar, NavbarBrand } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col className='fluid bg-2  align-text-right'>
          <Container>
            <i className='fab fa-facebook'>
              <a
                href='https://www.facebook.com/Actividad-3D-112294450296839/'
                target='_blank'
              ></a>
            </i>
            <i className='fab fa-google'>
              <a
                href='mailto:el.geek.encantador@gmail.com?subject=Hola%20Actividad3D'
                target='_blank'
              ></a>
            </i>
            <i className='fab fa-instagram'>
              <a href='@actividad.3d' target='_blank'></a>
            </i>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className='text-center py-3'>Copyright &copy;2021 Actividad3D</Col>
      </Row>
    </footer>
  )
}

export default Footer
