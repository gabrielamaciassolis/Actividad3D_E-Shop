import React from 'react'
import { Nav } from 'react-bootstrap'

const NavPills = () => {
  return (
    <>
      <Nav justify variant='tabs' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link href='/home'>
            Ultimas Novedades <i className='fas fa-fire'></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/home'>
            Arte <i className='fas fa-paint-brush'></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>
            Dia del Amor <i className='far fa-heart'></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>
            Electronicos <i className='fas fa-robot'></i>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default NavPills
