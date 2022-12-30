import React , {useEffect,useState} from 'react'
import Item from '../Item/Item'
import { apiType } from '../apiType'
import style from './Main.module.css'
import CartItem from '../CartItem/CartItem'
import shippingCart from './shopping-cart.png'


function Main() {
  const[apiData,setapiData] = useState<apiType[]>([]) ;
  const[cartClicked,setcartClicke] = useState(false) ;
  const cartClick = ()=>{setcartClicke(!cartClicked)} ;
  const TotalDollar = ()=>{return apiData.reduce((acc:number,obj:apiType)=>{return acc+=(obj.amount)*(obj.price)},0)} ;
  useEffect(()=>{fetchAPI()},[])
  // useEffect(()=>{console.log(apiData)},[apiData])
  
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
                    <Item setapiData={setapiData} apiData={apiData} {...item}/>
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
            {
              apiData.map((item)=>item.amount!=0?(
                <div key={item.id}>
                    <CartItem setapiData={setapiData} apiData={apiData} {...item}/>
                </div>
              ):null)
            }
            <div>Total:${TotalDollar().toFixed(2)}</div>
        </div>
        {cartClicked && <div className={style.shadow}></div> }
        
    </>
  )
}

export default Main