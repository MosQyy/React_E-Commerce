import React from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import product1 from "../../../img/product/vga1.jpg";
import product2 from "../../../img/product/ssd1.jpg";
import product3 from "../../../img/product/processor1.jpg";
import "../../../styles/user/categories/productList.css";

function ProductList() {
  return (
    <div>
      <NavBar />
      <div className="categoryTitle">
        <h1>category_name List</h1>
      </div>
      <div className="allProduct-content">
        <table className="product-table">
          <tr>
            <td>
              <div className="image-product">
                <img src={product3} width="180"></img>
                <br></br>
                <span>NVIDIA GeForce RTX 3080</span>
              </div>
            </td>
            <td>
              <div className="image-product">
                <img src={product3} width="180"></img>
                <br></br>
                <span>NVIDIA GeForce RTX 3080</span>
              </div>
            </td>
            <td>
              <div className="image-product">
                <img src={product3} width="180"></img>
                <br></br>
                <span>NVIDIA GeForce RTX 3080</span>
              </div>
            </td>
            <td>
              <div className="image-product">
                <img src={product3} width="180"></img>
                <br></br>
                <span>NVIDIA GeForce RTX 3080</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image-product">
                <img src={product2} width="180"></img>
                <br></br>
                <span>SSD Adata 1 Terrabyte</span>
              </div>
            </td>
            <td>
              <div className="image-product">
                <img src={product2} width="180"></img>
                <br></br>
                <span>SSD Adata 1 Terrabyte</span>
              </div>
            </td>
            <td>
              <div className="image-product">
                <img src={product2} width="180"></img>
                <br></br>
                <span>SSD Adata 1 Terrabyte</span>
              </div>
            </td>
            <td>
              <div className="image-product">
                <img src={product2} width="180"></img>
                <br></br>
                <span>SSD Adata 1 Terrabyte</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image-product">
                <img src={product1} width="180"></img>
                <br></br>
                <span>Intel Core i9 10900K</span>
              </div>
            </td>
            <td>
              <div className="image-product">
                <img src={product1} width="180"></img>
                <br></br>
                <span>Intel Core i9 10900K</span>
              </div>
            </td>
            <td>
              <div className="image-product">
                <img src={product1} width="180"></img>
                <br></br>
                <span>Intel Core i9 10900K</span>
              </div>
            </td>
            <td>
              <div className="image-product">
                <img src={product1} width="180"></img>
                <br></br>
                <span>Intel Core i9 10900K</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
