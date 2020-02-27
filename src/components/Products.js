import React, { useContext } from 'react'; // Step 3 add useContext
import { ProductContext } from '../contexts/ProductContext'; //Step 1

// Components
import Product from './Product';

// Step 2
const Products = () => {
	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};


export default Products;
