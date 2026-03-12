import { getProducts } from "../data/products"
import "../App.css"
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"

function Home() {
    const products = getProducts();

    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">welcome to shopping store</h1>
                <p className="home-subtitle">Welcome to our ecommerce store</p>
            </div>
            <div className="container">
                <h2 className="page-title">Featured Products</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </div>

        </div >
    )
}

export default Home