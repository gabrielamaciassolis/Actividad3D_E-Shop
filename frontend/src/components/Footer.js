import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col className='fluid bg-2  text-left'>
          <Container>
            <a
              href='https://www.facebook.com/Actividad-3D-112294450296839/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook'></i>{' '}
            </a>

            <a
              href='mailto:el.geek.encantador@gmail.com?subject=Hola%20Actividad3D'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-google'></i>{' '}
            </a>

            <a
              href='https://www.instagram.com/actividad.3d/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i>{' '}
            </a>

            <a
              href='mailto:eladtividad3d@outlook.com?subject=Hola%20Actividad3D'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='far fa-envelope fab'></i>{' '}
            </a>
          </Container>
        </Col>
        <Col className='fluid bg-2  text-right'>
          <Image src='/images/paypal_logos.png' width='210' />
        </Col>
      </Row>
      <Row>
        <Col className='text-center py-3'>Copyright &copy;2021 Actividad3D</Col>
      </Row>
    </footer>
  )
}

export default Footer
