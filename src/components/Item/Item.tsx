import React from 'react'
import { apiType } from '../apiType'
import style from './Item.module.css'

interface Itemprops extends  apiType {setapiData:Function,apiData:apiType[]}

function Item(props:Itemprops) {
  const{description,id,image,price,title,setapiData,apiData}=props
  const ADD = (id:number) =>{setapiData(apiData.map((obj)=>{return obj.id==id ? {...obj,amount:(obj.amount+1)}:{...obj}})) }
  if(id!==15){
  return (
    <div className={style.container}>
      <div className={style.commodity}><img src={image} /></div>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
      <div className={style.price }>${price}</div>
      <div className={style.button} onClick={()=>{ADD(id)}} ><button>ADD TO CART</button></div>
    </div>  
  )}
  else {
  return (
    <div className={style.container}>
      <div className={style.commodity}><img src={image} /></div>
      <div className={style.title}>{title}</div>
      <div className={style.smallDescription }>{description}</div>
      <div className={style.price }>${price}</div>
      <div className={style.button} onClick={()=>{ADD(id)}} ><button>ADD TO CART</button></div>
    </div>  
  ) 
  }
}

export default Item