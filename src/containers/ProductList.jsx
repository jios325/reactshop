import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';


const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	
	//usa el hook para traer los productos en un arreglo
	const products = useGetProducts(API);

	//imprime los productos y les asigna una funcion que recibe un evento
	return (
		<section className="main-container">
			<div className="ProductList">

				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
