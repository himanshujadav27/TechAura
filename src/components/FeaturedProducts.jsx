import React from "react";
import "../styles/FeaturedProducts.css";
import auraPods from "../assets/images/aurapods-pro.png";
import auraBudsLite from "../assets/images/aurabuds-lite.png";
import aurawatch from "../assets/images/aurawatch-x.png";
import auracharge from "../assets/images/auracharge-20k.png";


const products = [
  {
    id: 1,
    name: "AuraPods Pro",
    category: "Wireless Earbuds",
    price: "₹4,999",
    image: auraPods,
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "AuraWatch X",
    category: "Smart Watch",
    price: "₹7,999",
    image: aurawatch,
    badge: "NEW",
  },
  {
    id: 3,
    name: "AuraBuds Lite",
    category: "Wireless Earbuds",
    price: "₹2,999",
    image: auraBudsLite,
    badge: "",
  },
  {
    id: 4,
    name: "AuraCharge 20K",
    category: "Power Bank",
    price: "₹1,999",
    image: auracharge,
    badge: "",
  },

];

function FeaturedProducts(showAll) {
  return (
    <section className="featured-section" id="featured-products">
      <div className="container">
        {/* Section Heading */}
        <div className="featured-heading text-center">
          <p className="featured-eyebrow">OUR COLLECTION</p>

          <h2>
            Featured <span>Products</span>
          </h2>

          <p className="featured-description">
            Discover our handpicked selection of premium tech essentials.
          </p>
        </div>

        {/* Product Grid */}
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
              <article className="product-card">
                <div className="product-image-wrapper">
                  {product.badge && (
                    <span className="product-badge">
                      {product.badge}
                    </span>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    loading="lazy"
                  />

                  <button
                    type="button"
                    className="product-quick-btn"
                    aria-label={`View ${product.name}`}
                    onClick={() =>
                      window.alert(`${product.name} details coming soon!`)
                    }
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>

                <div className="product-info">
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>

                  <div className="product-bottom">
                    <span className="product-price">{product.price}</span>

                    <button
                      type="button"
                      className="product-add-btn"
                      aria-label={`Add ${product.name} to cart`}
                      onClick={() =>
                        window.alert(`${product.name} added to your demo cart!`)
                      }
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center featured-view-all">
          <a href="/products" className="featured-view-btn">
            View All Products <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
