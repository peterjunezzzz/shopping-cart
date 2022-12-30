import React from 'react'
import { apiType } from '../apiType'
import style from './CartItem.module.css'



interface CartItemProps extends apiType {setapiData:Function,apiData:apiType[]}

function CartItem(props:CartItemProps) {
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