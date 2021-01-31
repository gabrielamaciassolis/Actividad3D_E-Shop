import React, { useState } from 'react'
import { Form, Button, Col, Card, Accordion } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import Meta from '../components/Meta'
const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState(
    'PayPal o Tarjeta de Credito'
  )

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <>
      <Meta />
      <CheckoutSteps step1 step2 step3 />
      <Card>
        <Card.Header>
          {' '}
          <h1>Método de Pago</h1>
        </Card.Header>
        <FormContainer>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label as='legend'>Selecciona un método</Form.Label>
                <Col>
                  <Form.Check
                    type='radio'
                    label='PayPal o Tarjeta de Credito'
                    id='PayPal'
                    name='paymentMethod'
                    value='PayPal o Tarjeta de Credito'
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                  <br />
                  <Form.Check
                    type='radio'
                    label='Depósito Bancario'
                    id='DepositoBancario'
                    name='paymentMethod'
                    value='Depósito Bancario'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                </Col>
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

export default PaymentScreen
