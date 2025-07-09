import React from 'react';
import{Link} from 'react-router-dom';
import ProductCard from '../components/product-card';


const Home = () => {

  const addToCartHandler = () => {}


  return(

    <div className='home'>
     <section></section>


     <h1>
      Latest Products
      <Link to = "./search" className='findmore'>more</Link>
     </h1>

     <main>

      <ProductCard
       productId='asfsf' 
       name='macbook'
        price={3434} 
        stock={343}
        handler={addToCartHandler}
        photo='https://m.media-amazon.com/images/I/71CjP9jmqZL._SX679_.jpg'
        />

      

     </main>

    </div>



  )
}

export default Home