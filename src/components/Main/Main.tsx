import React , {useEffect,useState} from 'react'
import Item from '../Item/Item'
import { apiType } from '../apiType'
import style from './Main.module.css'
import CartItem from '../CartItem/CartItem'
import shippingCart from './shopping-cart.png'


function Main() {
  const[apiData,setapiData] = useState<apiType[]>([])
  const[cartClicked,setcartClicke] = useState(false)
  const cartClick = ()=>{setcartClicke(!cartClicked)}
  useEffect(()=>{fetchAPI()},[])
  
  const fetchAPI =  async ()=>{
    try{
        const res = await fetch('https://fakestoreapi.com/products') ;
        const data = await res.json() ;
        setapiData(data);
       }
    catch (error){console.log(error)}
    
  }
  return (
    <>
        <div className={style.container}>
         {
            apiData.map(item=>(
                <div key={item.id} >
                    <Item {...item}/>
                </div>
            ))
         }
        </div>
        <div className={style.icon}>
          <label htmlFor='toggleMenu' onClick={cartClick}>
            <img src={shippingCart} alt='失效'/>
          </label>  
        </div>
        <div className={style.number}>8</div>
        <input type="checkbox" id='toggleMenu' className={style.toggleMenu}></input>
        <div className={style.itemList}>
            <CartItem/>
        </div>
        {cartClicked && <div className={style.shadow}></div> }
        
    </>
  )
}

export default Main