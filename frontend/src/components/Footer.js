import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
  return (
    <footer>
      <container>
        <Row className='bg-2 text-center'>
          <Col className=' pl-5' sm={12} md={4}>
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
          </Col>
          <Col sm={12} md={4}>
            <span className='strong px-3'>
              {' '}
              Pregunta por nuestros precios de Mayoreo
            </span>
          </Col>
          <Col className='pr-5 text-center' sm={12} md={4}>
            <Image src='/images/paypal_logos.png' width='210' />
          </Col>
        </Row>
        <Row className='bg-1'>
          <Col className='text-left py-3 pl-5'>
            Copyright &copy;2021 Actividad3D
          </Col>
          <Col className='text-right py-3 pr-5'>
            <LinkContainer to='/termsandconditions'>
              <a>Terminos y condiciones</a>
            </LinkContainer>
          </Col>
        </Row>
      </container>
    </footer>
  )
}

export default Footer
