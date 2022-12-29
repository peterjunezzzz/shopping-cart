import React from 'react'
import style from './CartItem.module.css'

function CartItem() {
  return (
    <div className={style.container}>
        <div className={style.leftContainer}>
            <div className={style.title}>title</div>
            <div className={style.data}>Price:$ Total:$</div>
            <div className={style.buttons}>
                <div className={style.minus}>-</div>
                <div className={style.number}>number</div>
                <div className={style.plus}>+</div>
            </div>
        </div>
        <div className={style.img}><img/></div>

    </div>
  )
}

export default CartItem