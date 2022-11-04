import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
  return (
<footer className="text-center text-lg-start text-dark">
 <div
       className="bg-2 d-flex justify-content-between p-2 text-white">
      <div>
        <span>Conéctate con nosotros en las redes sociales:</span>
      </div>

      <div>
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
      </div>

      <div>
          <span>Pregunta por nuestros precios de Mayoreo</span>
      </div>
  </div>

  <div
         className="text-center p-3"
         >
      © 2022
      <a className="text-dark" href="https://mdbootstrap.com/"
         > Actividad3D.com - &#10084; desde Nuevo León</a
        >
    </div>


    {/*
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Company name</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Products</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" class="text-dark">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" class="text-dark">MDWordPress</a>
            </p>
            <p>
              <a href="#!" class="text-dark">BrandFlow</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Bootstrap Angular</a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p>
              <a href="#!" class="text-dark">Your Account</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" class="text-dark">Help</a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
                />
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </section>

    <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2020 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div> */}

      {/* <Row className='bg-2 text-center'>
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
      <Row className='bg-1 text-center'>
        <Col className='text-left py-3 pl-5'>
          Copyright &copy;2021 Actividad3D | Saludos desde Nuevo León
        </Col>
        <Col className='text-right py-3 pr-5'>
          <LinkContainer to='/termsandconditions'>
            <a>Terminos y condiciones</a>
          </LinkContainer>
        </Col> 
      </Row> */}
    </footer>
  )
}

export default Footer
