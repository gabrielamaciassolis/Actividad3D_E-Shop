import React from 'react'

const Depositos = () => {
  return (
    <>
      <p className='text-center'>
        {' '}
        Utiliza los siguientes datos para realizar tu pago: <br />
        <br />
        Banco: BBVA Bancomer
        <br />
        Cuenta: 0462128802 <br />
        CLABE: 012580004621288029 <br />
        Tarjeta (débito): 4815 1730 0010 6304
        <br /> <br />
        <strong className='warning'>
          {' '}
          Notificanos una vez que tu pago este completo
          <br />
        </strong>{' '}
        <br />
        <i className='fab fa-whatsapp'></i> +52 81 2288 1759 <br />
        <i className='far fa-envelope-open'></i> actividad3d@outlook.com <br />
        <br />
        Si lo prefieres, puedes usar nuestras siguientes opciones:
      </p>
    </>
  )
}

export default Depositos
