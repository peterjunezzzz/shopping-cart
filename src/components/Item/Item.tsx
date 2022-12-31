import React from 'react'
import { apiType } from '../apiType'
import style from './Item.module.css'

interface Itemprops extends  apiType {totalAmountContainer:React.RefObject<HTMLDivElement>,ADD:Function}

function Item(props:Itemprops) {
  const{description,id,image,price,title,totalAmountContainer,ADD}=props
  const blink = ()=>{if(totalAmountContainer.current==null){return}else(totalAmountContainer.current.style.opacity="0");totalAmountContainer.current.style.transform="scale(3)"}
  const deleteblink = ()=>{if(totalAmountContainer.current==null){return}else(totalAmountContainer.current.style.opacity="1");totalAmountContainer.current.style.transform="scale(1)"}

  if(id!==15){
  return (
    <div className={style.container}>
      <div className={style.commodity}><img src={image} /></div>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
      <div className={style.price }>${price}</div>
      <div className={style.button }  onMouseDown={()=>{blink()}} onMouseUp={()=>{deleteblink()}} onClick={()=>{ADD(id)}}   ><button>ADD TO CART</button></div>
    </div>  
  )}
  else {
  return (
    <div className={style.container}>
      <div className={style.commodity}><img src={image} /></div>
      <div className={style.title}>{title}</div>
      <div className={style.smallDescription }>{description}</div>
      <div className={style.price }>${price}</div>
      <div className={style.button} onMouseDown={()=>{blink()}} onMouseUp={()=>{deleteblink()}} onClick={()=>{ADD(id)}} ><button>ADD TO CART</button></div>
    </div>  
  ) 
  }
}

export default Item