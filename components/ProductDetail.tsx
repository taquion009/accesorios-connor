import Image from 'next/image'
import React from 'react'
import style from 'styles/productDetail.module.scss'
import iconBag from 'public/img/icon-bag.svg'

const ProductDetail: React.FC<Product> = (props) => {
  const [quantity, setQuantity] = React.useState<number>(1)

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[0-9]+$/.test(e.target.value) || e.target.value === '') {
      setQuantity(parseInt(e.target.value))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(quantity)
  }

  const handleQuantityChange = (add: boolean) => {
    if (add) {
      setQuantity(quantity + 1)
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1)
      }
    }
  }

  return (
    <div className={style.detail}>
      <div className={style.title}>
        <h1>{props.title}</h1>
        <span className={style.price}>
          ${(props.price * (quantity || 1)).toFixed(2)}
        </span>
      </div>
      <p className={style.description}>
        Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
        demostraciones de tipografías o de borradores de diseño para probar el
        diseño visual antes de insertar el texto final.
      </p>
      <form onSubmit={handleSubmit}>
        <div className={style.buttonsQuantity}>
          <button
            style={{
              paddingBottom: '29px',
              lineHeight: '0px',
            }}
            type="button"
            onClick={() => handleQuantityChange(false)}
          >
            _
          </button>
          <input
            type="number"
            className={style.quantity}
            value={quantity}
            onChange={handleQuantity}
          />
          <button type="button" onClick={() => handleQuantityChange(true)}>
            +
          </button>
        </div>
        <button type="submit" className={style.buttonSubmit}>
          AGREGAR A LA
          <Image src={iconBag} alt="icon bag" width={24} height={29} />
        </button>
      </form>
    </div>
  )
}

export default ProductDetail
