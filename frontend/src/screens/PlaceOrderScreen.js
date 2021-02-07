import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { USER_DETAILS_RESET } from '../constants/userConstants'
import Meta from '../components/Meta'

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  let receivedOffer = false

  if (!cart.shippingAddress.address) {
    history.push('/shipping')
  } else if (!cart.paymentMethod) {
    history.push('/payment')
  }

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  const calculateMayoreo = (num) => {
    return cart.cartItems.reduce(
      (acc, item) =>
        acc +
        (item.qty >= 10
          ? item.price * item.qty - item.price * item.qty * 0.3
          : item.price * item.qty),
      0
    )
    // return cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  }

  const normalPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  cart.itemsPrice = addDecimals(calculateMayoreo())

  if (Number(cart.itemsPrice) < Number(normalPrice)) {
    receivedOffer = true
  }

  const calculateShipping = (num) => {
    if (!cart.shippingAddress.country.includes('México')) {
      // International
      return 1000
    } else if (cart.shippingAddress.country.includes('México')) {
      if (
        cart.shippingAddress.city.toUpperCase().startsWith('MONTERREY') ||
        cart.shippingAddress.city.toUpperCase().includes('GUADALUPE') ||
        cart.shippingAddress.city.toUpperCase().includes('SAN NICOLAS') ||
        cart.shippingAddress.city.includes('San Nicolás') ||
        cart.shippingAddress.city.toUpperCase().includes('ESCOBEDO') ||
        cart.shippingAddress.city.toUpperCase().includes('APODACA') ||
        cart.shippingAddress.city.toUpperCase().includes('SAN PEDRO') ||
        cart.shippingAddress.city.toUpperCase().includes('SANTA CATARINA') ||
        cart.shippingAddress.city.toUpperCase().includes('STA. CATARINA') ||
        cart.shippingAddress.city.toUpperCase().includes('STA CATARINA')
      ) {
        //Metropolitan
        return 45
      } else if (
        cart.shippingAddress.postalCode.toUpperCase().startsWith('64') ||
        cart.shippingAddress.postalCode.toUpperCase().startsWith('65') ||
        cart.shippingAddress.postalCode.toUpperCase().startsWith('66') ||
        cart.shippingAddress.postalCode.toUpperCase().startsWith('67')
      ) {
        // NL
        return 110
      } else {
        // Rest of Mexico
        return 130
      }
    }

    return 130
  }

  cart.shippingPrice = addDecimals(calculateShipping(200))
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
    // eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <>
      <Meta />
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Envío</h2>
              <p>
                <strong>Dirección: </strong>
                {cart.shippingAddress.address},{' '}
                {cart.shippingAddress.neighborhood}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Metodo de pago</h2>
              <strong>Metodo: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Productos en la Órden</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Tu carrito esta vacío</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Resumen de la Orden</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Productos</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Envio</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item> */}
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
                {receivedOffer && !error && (
                  <Message variant='danger'>
                    Mas de 10 piezas del mismo producto otorgan un 30% en ese
                    articulo
                  </Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Proceder al pago
                </Button>
              </ListGroup.Item>

              <ListGroup.Item>
                Trabajamos sobre pedido en todos nuestros diseños y tardamos de
                7 a 10 dias hábiles en Mascaras y de 2 a 3 dias en el resto de
                productos. Agradecemos tu comprensión y tu confianza. Si das
                click en "Proceder al pago", entendemos que aceptas ésta
                condición. De cualquier manera, tan pronto como tu producto este
                listo, te los enviaremos con mucho gusto.
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen
