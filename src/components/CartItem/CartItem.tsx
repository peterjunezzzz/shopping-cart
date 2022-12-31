import React from 'react'
import { apiType } from '../apiType'
import style from './CartItem.module.css'



interface CartItemProps extends apiType {setapiData:Function,apiData:apiType[],ADD:Function}

function CartItem(props:CartItemProps) {
  const{title,price,amount,image,ADD,id,apiData,setapiData}=props
  let total=(price*amount).toFixed(2)
  const sub=(id:number)=>{setapiData(
      apiData.map((obj)=>{if(obj.id==id){return{...obj,amount:(obj.amount-1)}}
                                         else{return {...obj}}}))}
  
  
  
  return (
    <div className={style.container}>
        <div className={style.leftContainer}>
            <div className={style.title}>{title}</div>
            <div className={style.data}>
              <div>Price:${price}</div>
              <div>Total:${total}</div>
            </div>
            <div className={style.buttons}>
                <div className={style.minus} onClick={()=>{sub(id)}}>-</div>
                <div className={style.number} >{amount}</div>
                <div className={style.plus} onClick={()=>{ADD(id)}}>+</div>
            </div>
        </div>
        <div className={style.img}><img src={image}/></div>

    </div>
  )
}

export default CartItem