import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import Meta from '../components/Meta'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [strengthPass, setStrengthPass] = useState('cadetblue')

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
    setMessage('')
    analyzePass()
  }, [history, userInfo, redirect, password])

  const mediumRegex = new RegExp(
    '^(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{5,})'
  )

  const analyzePass = () => {
    console.log(password)
    if (password.length > 0 && mediumRegex.test(password)) {
      setStrengthPass('cadetblue')
      console.log(strengthPass)
    } else if (password.length > 0) {
      setStrengthPass('coral')
      console.log(strengthPass)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(strengthPass)

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden')
    } else if (strengthPass === 'coral') {
      setMessage(
        'Ingrese una contraseña mas segura. Debe contener al menos un numero o una mayuscula'
      )
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <>
      <Meta />
      <FormContainer>
        <h1>Crea una cuenta</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='name'
              required
              placeholder='nombre'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              required
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              style={{ borderColor: strengthPass }}
              type='password'
              required
              placeholder='*****'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              style={{ borderColor: strengthPass }}
              type='password'
              required
              placeholder='*****'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Registrarse
          </Button>
        </Form>

        <Row className='py-3'>
          <Col>
            Tienes una cuenta?{' '}
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              Iniciar sesión
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  )
}

export default RegisterScreen
