import React , {useEffect,useState,useRef} from 'react'
import Item from '../Item/Item'
import { apiType } from '../apiType'
import style from './Main.module.css'
import CartItem from '../CartItem/CartItem'
import shippingCart from './shopping-cart.png'


function Main() {
  const[apiData,setapiData] = useState<apiType[]>([]) ;
  const[cartClicked,setcartClicke] = useState(false) ;
  const totalAmountContainer = useRef<HTMLDivElement>(null) ;

  const cartClick = ()=>{setcartClicke(!cartClicked)} ;
  const TotalAmount = ()=>{return apiData.reduce((acc,obj)=>{return acc+=obj.amount},0)} ;
  const TotalDollar = ()=>{return apiData.reduce((acc:number,obj:apiType)=>{return acc+=(obj.amount)*(obj.price)},0)} ;
  const ADD = (id:number) =>{setapiData(apiData.map((obj)=>{return obj.id==id ? {...obj,amount:(obj.amount+1)}:{...obj}})) };
  

  useEffect(()=>{fetchAPI()},[])
  
  
  const fetchAPI =  async ()=>{
    try{
        const res = await fetch('https://fakestoreapi.com/products') ;
        let data = await res.json() ;
        data = await data.map((obj:apiType[])=>{return{amount:0,...obj}}) ;
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
                    <Item totalAmountContainer={totalAmountContainer} ADD={ADD} {...item}/>
                </div>
            ))
         }
        </div>

        <div className={style.icon}>
          <label htmlFor='toggleMenu' onClick={cartClick}>
            <img src={shippingCart} alt='失效'/>
          </label>  
        </div>
        <div className={style.number} ref={totalAmountContainer}>{TotalAmount()}</div>
        <input type="checkbox" id='toggleMenu' className={style.toggleMenu}></input>

        <div className={style.itemList}>
            {
              apiData.map((item)=>item.amount!=0?(
                <div key={item.id}>
                    <CartItem setapiData={setapiData} apiData={apiData} ADD={ADD} {...item}/>
                </div>
              ):null)
            }
            <div className={style.TotalDollar}>Total:${TotalDollar().toFixed(2)}</div>
        </div>
        {cartClicked && <div className={style.shadow}></div> }
        
    </>
  )
}

export default Main