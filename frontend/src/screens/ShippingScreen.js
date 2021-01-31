import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import { paisesArr } from '../constants/paisesConstants'
import Meta from '../components/Meta'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(country)
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }

  return (
    <>
      <Meta />

      <CheckoutSteps step1 step2 />

      <Card>
        <Card.Header>
          {' '}
          <h1>Entrega</h1>
        </Card.Header>
        <FormContainer>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='address'>
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingresa dirección de entrega'
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='city'>
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ciudad'
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='Codigo postal'>
                <Form.Label>Codigo postal</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Codigo postal'
                  value={postalCode}
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='country'>
                <Form.Label>Pais</Form.Label>
                <Form.Control
                  // as='select'
                  type='text'
                  placeholder='pais'
                  value={country}
                  required
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {/* {paisesArr.map((pais) => (
                <option key={pais.toString()}>{pais}</option>
              ))} */}
                </Form.Control>
              </Form.Group>

              <Button type='submit' variant='primary'>
                Continuar
              </Button>
            </Form>
          </Card.Body>
        </FormContainer>
      </Card>
    </>
  )
}

export default ShippingScreen
