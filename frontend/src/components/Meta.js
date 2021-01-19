import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Bienvenidos a Actividad3D',
  description:
    'Impresión y tallado: figuras de acción, anime, videojuegos y mas',
  keywords: 'Impresión y tallado: figuras de acción, anime, videojuegos y mas',
}

export default Meta
