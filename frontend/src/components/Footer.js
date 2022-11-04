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
</footer>
  )
}

export default Footer
