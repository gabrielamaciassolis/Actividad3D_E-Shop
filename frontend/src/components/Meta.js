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
    'Impresion 3d, Corte y Tallado Personalizado. Figuras de acción, anime, videojuegos y mas.Servicios de Prototipado y Productos finales. Nuevo León Mexico',
  keywords:
    'actividad3d, actividad 3d, figuras de accion, anime, videojuegos, prototipos, corte, tallado, impression3d, impression 3d, laser ,cnc, impresoras 3d',
}

export default Meta
