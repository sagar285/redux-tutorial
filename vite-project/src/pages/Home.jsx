import React,{useEffect} from 'react'
import { add } from '../Redux/Cartslice'
import { useDispatch, useSelector } from 'react-redux'
import { STATUSES, fetchproducts } from '../Redux/ProductSlice'


const Home = () => {
    const dispatch =useDispatch();
        const {data:products,status}= useSelector((state)=>state.product)


    useEffect(()=>{
       dispatch(fetchproducts());  
    },[])

    const handleadd =(product)=>{
     dispatch(add(product));
    }
    if(status === STATUSES.Loading){
        return <h2 style={{fontWeight:"bolder"}}>Loading...</h2>
    }

  return (
    <div className='productsWrapper'>
       {
        products.map((product)=>(
             <div className='card' key={product.id}>
                <img src={product.image} alt='img'/>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button className='btn' onClick={()=>handleadd(product)}>Add to cart</button>
             </div>
        ))
       }
    </div>
  )
}

export default Home