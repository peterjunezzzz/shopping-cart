import React from 'react'
import { apiType } from '../apiType'
import style from './Item.module.css'
function Item(props:apiType) {
  const{description,id,image,price,title}=props
  if(id!=15){
  return (
    <div className={style.container}>
      <div className={style.commodity}><img src={image} /></div>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
      <div className={style.price }>${price}</div>
      <div className={style.button}><button>ADD TO CART</button></div>
    </div>  
  )}
  else {
  return (
    <div className={style.container}>
      <div className={style.commodity}><img src={image} /></div>
      <div className={style.title}>{title}</div>
      <div className={style.smallDescription }>{description}</div>
      <div className={style.price }>${price}</div>
      <div className={style.button}><button>ADD TO CART</button></div>
    </div>  
  ) 
  }
}

export default Item