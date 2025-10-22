import React, { FC } from 'react';
import useFetch from '../../utils/useFetch';
import "./displayList.scss"


const DisplayProducts: FC = () => {
  const respList = useFetch('/products', 'get');
  let productList = respList.data;
  
  if (respList.loading) return <p>Loading...</p>;

  return (
    <div className="container-wrapper">
      {productList && productList.map((product:any) => (
          <div key={product.id} className="container-card">
            <h2 className="" >{product.title}</h2>
            <p className="">{product.description}</p>
            <p>{product.price}</p>
            <img src={product.images} alt={product.title}  width={150}/>
          </div>
        ))}
    </div>
  );
};

export default DisplayProducts;
