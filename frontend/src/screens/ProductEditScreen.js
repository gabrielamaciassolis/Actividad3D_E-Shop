import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import path from 'path'
//import uploadFileToBlob  from './actions/azureStorageActions'
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET })
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  function checkFileType(file) {
    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    )
    const mimetype = filetypes.test(file.mimetype)

    if (extname && mimetype) {
      return true
    } else {
      return false
    }
  }

  const containerName = `cloudimages`
  const createBlobInContainer = async (containerClient, file) => {
    const filename = file.name + '-' + Date.now()
    // create blobClient for container
    const blobClient = containerClient.getBlockBlobClient(filename)

    // set mimetype as determined from browser with file upload control
    const options = { blobHTTPHeaders: { blobContentType: file.type } }
    const { data: storageAccountName } = await axios.get('/api/config/accn')
    // upload file
    await blobClient.uploadBrowserData(file, options)
    // await blobClient.uploadBrowserData(file, options)
    const filenameout = `https://${storageAccountName}.blob.core.windows.net/${containerName}/${filename}`

    return filenameout
  }

  const uploadFileToBlob = async (file) => {
    if (!file) return {}

    const { data: sasToken } = await axios.get('/api/config/sast')
    const { data: storageAccountName } = await axios.get('/api/config/accn')

    // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
    const blobService = new BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
    )

    // get Container - full public read access
    const containerClient = blobService.getContainerClient(containerName)

    // await containerClient.createIfNotExists({
    //   access: 'container',
    // })

    // upload file
    const data = await createBlobInContainer(containerClient, file)

    return data
    //    // get list of blobs in container
    //    return getBlobsInContainer(containerClient);
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      if (checkFileType(file)) {
        throw new Error('Solo imagenes!')
      }
      const data = await uploadFileToBlob(file)
      // const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    )
  }

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Regresar
      </Link>
      <FormContainer>
        <h1>Editar Producto</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type='name'
                placeholder='nombre'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type='number'
                placeholder='precio'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingrese imagen url'
                value={image || ''}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Eliga archivo'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type='text'
                placeholder='marca'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Cantidad en almacén</Form.Label>
              <Form.Control
                type='number'
                placeholder='cantidad'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Categoría</Form.Label>
              <Form.Control
                type='text'
                placeholder='categoría'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type='text'
                placeholder='descripción'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Actualizar
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ProductEditScreen
