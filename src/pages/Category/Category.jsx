import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,  useState } from 'react'
import axios from 'axios'


export default function Category() {
    let {pid}= useParams();

    const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const { data } = await axios.get(`https://ecommerce-node4.vercel.app/products/category/${pid}`);
    setProducts(data.products);
  };
  useEffect(() => {
    getProducts();
  }, []);

    

  return (
    <>
    <div>Category</div>
    <h2>{pid.name}</h2>
    {
    
    products.map(product=>(
        <>

        <div className="col-lg-6 col-md-4 col-sm-6" key={product.id}>
        <h2 key="name">{product.name}</h2>
        <img  key="img"src={product.mainImage.secure_url}></img>

        <h4 key="description">{product.description}</h4>

        </div>
        
        
        </>
        
    ))}
    
    </>
  )
}
