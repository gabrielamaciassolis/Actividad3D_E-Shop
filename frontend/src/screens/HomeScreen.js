import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {

    //default will be empty array
  const [products, setProducts] = useState([])

//it will run as soon as the component load
useEffect(()=> {
  const fetchProducts = async () => {
     const { data } = await axios.get('/api/products')

     setProducts(data)
  }

  fetchProducts()

},[])

  return (
    <>
      <h1>Últimas Novedades</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
