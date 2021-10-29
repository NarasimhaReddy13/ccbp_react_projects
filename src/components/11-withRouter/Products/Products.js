import AllProductsSection from "../ProductsComponent/AllProducts";

import Header from '../HeaderWithRouter/Header'
import './Products.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <AllProductsSection />
    </div>
  </>
);

export default Products;